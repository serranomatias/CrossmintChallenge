/**
 * Logs and handles errors.
 *
 * @param {Error} error - The error to handle.
 * @param {string} message - The error message to log.
 * @returns {void}
 */
const handleError = async (error, message) => {
    if (error.code === 'ECONNREFUSED') {
      console.error('Failed to connect to server:', error);
    } else if (error.response) {
      console.error(`${message}:`, error.response.data);
    } else {
      console.error('Unknown error:', error);
    }
  }

  module.exports = {handleError};