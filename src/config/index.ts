export const config = {
    API_URL: process.env.REACT_APP_API_URL,
    POLLING_INTERVAL: process.env.REACT_APP_POLLING_INTERVAL ? parseInt(process.env.REACT_APP_POLLING_INTERVAL, 10) : 30000,
    API_KEY: process.env.REACT_APP_API_KEY,
};