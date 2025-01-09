const config = {
    development: "http://3.110.134.175/:8080", // Backend URL for local testing
    production: "/api"

};

// Automatically choose the correct environment
const apiBaseURL = window.location.hostname === "http://51.21.80.154:8080/api/";  

// Expose the API URL globally
window.apiBaseURL = apiBaseURL;