import axios from 'axios'

export const api = axios.create({

    headers: {
		"x-rapidapi-host": "api-formula-1.p.rapidapi.com",
		"x-rapidapi-key": "4fcaa9a41f416a9721da54281b7a293e"}

    // headers: {
    //     "x-rapidapi-host": "v3.football.api-sports.io",
    //     "x-rapidapi-key": "4fcaa9a41f416a9721da54281b7a293e"
    // }
})