import axios from 'axios'

export const api = axios.create({
  headers: {
    // "x-rapidapi-host": "api-football-v1.p.rapidapi.com/v2",
    "x-rapidapi-key": "4fcaa9a41f416a9721da54281b7a293e"}
  }
)
    // headers: {
    //     "x-rapidapi-host": "v3.football.api-sports.ioapi-formula-1.p.rapidapi.com",https://api-football-v1.p.rapidapi.com/v2/players/search/{lastname}
    //     "x-rapidapi-key": "4fcaa9a41f416a9721da54281b7a293e"
    // }
