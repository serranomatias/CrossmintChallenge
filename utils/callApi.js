const axios = require('axios');
/**
 * Calls an API using the specified HTTP method and URL.
 * 
 * @param {string} method - The HTTP method to use (e.g. 'get', 'post', etc.).
 * @param {string} url - The URL to call.
 * @param {object} data - The data to send with the request (optional).
 * @returns {Promise<object>} - A Promise that resolves with the API response.
 * @throws {Error} - An error object if the API call fails.
 */
const callApi = async (method, url, data) => {
    try {
        const response = await axios[method](url, data,{
            headers: {
              'Content-Type': 'application/json'
            }
          });
        return response;
    } catch (error) {
        console.error(`API call failed for ${url}:`, error);
        throw error;
    }
}

module.exports = { callApi };