import axios from "axios";
import { parseCookies, destroyCookie } from "nookies";
import { loadProgressBar } from "axios-progress-bar";
import "axios-progress-bar/dist/nprogress.css";

const { "mr.cookie": cookies } = parseCookies();

const api = axios.create({
	baseURL: process.env.NODE_ENV !== 'production' ? "http://localhost:8000/api/": "https://mercado-solar.herokuapp.com/api/",
	// baseURL: "https://mercado-solar.herokuapp.com/api/",
	headers: {
		Authorization: `${cookies ? `Bearer ${cookies}` : ""}`,
	},
});


loadProgressBar(
	{
		minimum: 0.75,
		// easing: "ease",
		// speed: 300,
		// trickleRate: 0.02,
		// trickleSpeed: 300,
		showSpinner: false,
	},
	api
);

export { api };
