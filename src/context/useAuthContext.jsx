import React, {createContext, useContext, useState, useEffect} from 'react';
import { api } from '../services/api';
import { destroyCookie, setCookie, parseCookies } from 'nookies'
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function AuthProvider({children}){
    const [user, setUser] = useState('');

    const [isAutheticated, setIsAuthenticated] = useState(() => {
		const {'mr.cookie': token} = parseCookies();
		if(token) return true;
        return false;
	});

    const navigate = useNavigate();

    let authChannel = new BroadcastChannel('auth')


    const signOut = () => {
        destroyCookie(undefined, 'mr.cookie');
        setIsAuthenticated(false);
        authChannel.postMessage('signOut');
        navigate('/');
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
    }, []) 
    
    const signIn = async(username, password) => {
        const {data} = await api.post('/token/', {email: username, password});
        setUser(data.access);

        setCookie(undefined, 'mr.cookie', data.access, {
            maxAge: 60 * 60 * 24 * 30, // 30 days
            path: '/'
        })

        api.defaults.headers.common['Authorization'] = `Bearer ${data.access}`
      
        setIsAuthenticated(true);
        navigate('/')

        authChannel.postMessage('signIn');

    }

    return(
       <AuthContext.Provider value={{user, signIn, signOut, isAutheticated}}>
            {children}
       </AuthContext.Provider> 
    )
}

export const useAuthContext = () => useContext(AuthContext);