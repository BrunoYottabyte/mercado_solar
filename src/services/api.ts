import axios from "axios";
import { parseCookies, destroyCookie } from "nookies";
import { loadProgressBar } from "axios-progress-bar";
import "axios-progress-bar/dist/nprogress.css";

const { "mr.cookie": cookies } = parseCookies();

const api = axios.create({
	baseURL: "https://mercado-solar.herokuapp.com/api/",
	headers: {
		Authorization: `${cookies ? `Bearer ${cookies}` : ""}`,
	},
});

api.interceptors.response.use(
	(response) => response,
	(error) => {
		
		if (error.response.status === 401) {
			destroyCookie(undefined, "mr.cookie");
			// window.location.href = "/login";
		}
		return error;
	}
);

// api.get("/api")
// 	.then(console.log)

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