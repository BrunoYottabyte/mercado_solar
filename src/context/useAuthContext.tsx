import React, {createContext, useContext, useState, useEffect} from 'react';
import {api} from '../services/api';
import {destroyCookie, setCookie, parseCookies} from 'nookies';
import {useNavigate} from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext();

export function AuthProvider({children}) {
  const [user, setUser] = useState('');
  const [userId, setUserId] = useState('');
  const [userType, setUserType] = useState('user');

  const {'mr.cookie': token} = parseCookies();
  const [isAutheticated, setIsAuthenticated] = useState(() => {
    if (token) return true;
    return false;
  });

  const navigate = useNavigate();

  let authChannel = new BroadcastChannel('auth');

  const signOut = () => {
    destroyCookie(undefined, 'mr.cookie', {path: '/'});
    setIsAuthenticated(false);
    api.defaults.headers.common['Authorization'] = undefined;
    // authChannel.postMessage('signOut');
    navigate('/');
    setUserId('');
    setUserType('');
  };

  useEffect(() => {
    authChannel.onmessage = message => {
      switch (message.data) {
        case 'signOut':
          window.location.reload();
          break;
        case 'signIn':
          window.location.reload();
          break;

        default:
          break;
      }
    };
    const {'mr.cookie': token} = parseCookies();
    if (token) {
      const {user_id, type} = jwtDecode(token);
      setUserId(user_id);
      type && setUserType(type);
    }
  }, []);

  const signIn = async (username, password) => {
    const {data} = await api.post('/token/', {email: username, password});
    setUser(data.access);

    setCookie(undefined, 'mr.cookie', data.access, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    });

    if (data.access) {
      const {user_id, type} = jwtDecode(data.access);
      setUserId(user_id);
      type && setUserType(type);
    }

    api.defaults.headers.common['Authorization'] = `Bearer ${data.access}`;

    setIsAuthenticated(true);
    navigate('/');
  };

  const signUp = async (email, password) => {
    const {data} = await api.post('/user/', {email, password});

    if (!data) {
      return false;
    }

    setUser(data.token.access);

    setCookie(undefined, 'mr.cookie', data.token.access, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    });
    api.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${data.token.access}`;
    setIsAuthenticated(true);

    const {user_id, type} = jwtDecode(data.token.access);
    setUserId(user_id);
    type && setUserType(type);
    return data.id;
  };

  const signInUserId = async (email, password) => {
    const {data} = await api.post('/token/', {email, password});

    if (!data) {
      return false;
    }

    setUser(data.access);

    setCookie(undefined, 'mr.cookie', data.access, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    });
    api.defaults.headers.common['Authorization'] = `Bearer ${data.access}`;
    setIsAuthenticated(true);

    const {user_id, type} = jwtDecode(data.access);
    setUserId(user_id);
    setUserType(type);
    return user_id;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userId,
        userType,
        signIn,
        signOut,
        signUp,
        signInUserId,
        isAutheticated,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
