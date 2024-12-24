const config = {
    development: "http://localhost:8080", // Backend URL for local testing
    production: "https://your-backend-domain.com" // Backend URL for production
};

// Automatically choose the correct environment
const apiBaseURL = window.location.hostname === "localhost" ? config.development : config.production;

// Expose the API URL globally
window.apiBaseURL = apiBaseURL;