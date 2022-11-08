import axios from 'axios';
import { parseCookies } from 'nookies';
import { loadProgressBar } from 'axios-progress-bar'
import 'axios-progress-bar/dist/nprogress.css'

const { 'mr.cookie': cookies } = parseCookies();

export const api = axios.create({
	baseURL: 'https://mr-sistemas.herokuapp.com',
	headers: {
		'Authorization': `${cookies ? `Token ${cookies}` : ""}`
	}

})

// api.get("/api")
// 	.then(console.log)

loadProgressBar({
	minimum: 0.75,
	// easing: "ease",
	// speed: 300,
	// trickleRate: 0.02,
	// trickleSpeed: 300,
	showSpinner: false,
},
	api
);
