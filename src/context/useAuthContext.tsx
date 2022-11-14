import React, {createContext, useContext, useState, useEffect} from 'react';
import { api } from '../services/api';
import { destroyCookie, setCookie, parseCookies } from 'nookies'
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode'

const AuthContext = createContext();

export function AuthProvider({children}){
    const [user, setUser] = useState('');
    const [userId, setUserId] = useState('');
    const [userType, setUserType] = useState('');

    const {'mr.cookie': token} = parseCookies();
    const [isAutheticated, setIsAuthenticated] = useState(() => {
		if(token) return true;
        return false;
	});

    const navigate = useNavigate();

    let authChannel = new BroadcastChannel('auth')


    const signOut = () => {
        destroyCookie(undefined, 'mr.cookie', {path: '/'});
        setIsAuthenticated(false);
        api.defaults.headers.common['Authorization'] = undefined;
        // authChannel.postMessage('signOut');
        navigate('/');
        setUserId('');
        setUserType('');
    }

    useEffect(() => {
        authChannel.onmessage = (message) => {
            switch(message.data){
                case 'signOut': 
                    window.location.reload();
                    break;
                case 'signIn': 
                    window.location.reload();
                    break;

                default: 
                    break;
            }
        }
        const {'mr.cookie': token} = parseCookies();
        if(token){
            const { user_id, type } = jwtDecode(token);
            console.log(user_id, type)
            setUserId(user_id);
            setUserType(type);
        }
    }, []) 
    
    const signIn = async(username, password) => {
        const {data} = await api.post('/token/', {email: username, password});
        setUser(data.access);

        setCookie(undefined, 'mr.cookie', data.access, {
            maxAge: 60 * 60 * 24 * 30, // 30 days
            path: '/'
        })

        if(data.access){
            const { user_id, type } = jwtDecode(data.access);
            setUserId(user_id);
            setUserType(type);
        }
        
        
        api.defaults.headers.common['Authorization'] = `Bearer ${data.access}`
      
        setIsAuthenticated(true);
        navigate('/')

        // authChannel.postMessage('signIn');
    }

    return(
       <AuthContext.Provider value={{user, userId, userType, signIn, signOut, isAutheticated}}>
            {children}
       </AuthContext.Provider> 
    )
}

export const useAuthContext = () => useContext(AuthContext);