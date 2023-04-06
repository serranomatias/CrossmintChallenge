const { baseUrl, candidateId } = require('./constants');
const { callApi } = require('./callApi');
const { handleError } = require('./handleError');
const axios = require('axios');

async function deleteSoloons(row, column) {
    try {
    const url = `${baseUrl}/comeths`;
      const data = { row, column, candidateId };
      const config = {
        headers: { 'Content-Type': 'application/json' }
      };
      const response = await axios.delete(url, { data, config });
      console.log(`Deleted comeths at (${row}, ${column})`);
      return response.data;
    } catch (error) {
      console.error(`Failed to delete Polyanet at (${row}, ${column}):`, error.response.data);
      throw error;
    }
  }

  module.exports= { deleteSoloons };