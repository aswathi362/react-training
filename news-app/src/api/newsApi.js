import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = 'https://newsapi.org/v2';

export const getTopHeadlines = (params) => axios.get(`${baseUrl}/top-headlines`,{
    headers:{'X-API-Key': apiKey},
    params,
});

export const getEverything = (params) => axios.get(`${baseUrl}/everything`,{
    headers:{'X-API-Key': apiKey},
    params,
});