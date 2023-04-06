const { baseUrl, candidateId } = require('../utils/constants');
const { callApi } = require('../utils/callApi');
const { handleError } = require('../utils/handleError');

class Polyanet {
  constructor(row, column) {
    this.row = row;
    this.column = column;
  }

  async create() {
    const polyanetUrl = `${baseUrl}/polyanets`;
    try {
      const data = { row: this.row, column: this.column, candidateId };
      const response = await callApi('post', polyanetUrl, data);
      console.log(`Created 🪐POLYanet at (${this.row}, ${this.column})`);
      return response.data;
    } catch (error) {
      handleError(error, `Failed to create POLYanet at (${this.row}, ${this.column})`);
      throw error;
    }
  }
}

module.exports = { Polyanet };