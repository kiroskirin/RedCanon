/**
Configuration file
 */

export { default as configureStore } from './configureStore';

const API_ENDPOINT = "https://jsonplaceholder.typicode.com";

export const apiWithPath = path => {
    return `${API_ENDPOINT}${path}`
}