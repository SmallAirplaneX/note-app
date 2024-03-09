import axios from 'axios';

const baseURL = "http://localhost:4000/api";

export const request = axios.create({
    baseURL: baseURL,
    timeout: 1000,
});