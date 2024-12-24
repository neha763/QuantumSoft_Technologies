const config = {
    development: "http://localhost:8080", // Backend URL for local testing
    production: "http://your-backend-domain.com/api/admin/register"

};

// Automatically choose the correct environment
const apiBaseURL = window.location.hostname === "localhost" ? config.development : config.production;

// Expose the API URL globally
window.apiBaseURL = apiBaseURL;