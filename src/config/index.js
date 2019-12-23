/**
Configuration file
 */
 
const API_ENDPOINT = "https://jsonplaceholder.typicode.com";

export const apiWithPath = path => {
    return `${API_ENDPOINT}${path}`
}