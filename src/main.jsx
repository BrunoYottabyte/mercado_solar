import React from 'react';
import {BrowserRouter, HashRouter} from 'react-router-dom';

import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {GlobalStorage} from './context/GlobalContext';
import 'regenerator-runtime';
import {AuthProvider} from './context/useAuthContext';
import {CartProvider} from './context/CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	<BrowserRouter>
		<AuthProvider>
			<CartProvider>
				<GlobalStorage>
					<App />
				</GlobalStorage>
			</CartProvider>
		</AuthProvider>
	</BrowserRouter>,
	// </React.StrictMode>
);
