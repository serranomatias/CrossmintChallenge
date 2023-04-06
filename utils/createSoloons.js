const { baseUrl, candidateId } = require('../utils/constants');
const { callApi } = require('../utils/callApi');
const { handleError } = require('../utils/handleError');

class Soloon {
    constructor(row, column, color) {
        this.row = row;
        this.column = column;
        // Have to use `toLowerCase()` because the raw object
        // is uppercase, and the api accept the keys in
        // lowerCase.
        this.color = color.toLowerCase();
    }

    async create() {
        const soloonsUrl = `${baseUrl}/soloons`;
        try {
            const data = { row: this.row, column: this.column, color: this.color, candidateId };
            const response = await callApi('post', soloonsUrl, data);
            console.log(`Created 🌟SOLOON at (${this.row}, ${this.column}, ${this.color})`);
            return response.data;

        } catch (error) {
            handleError(error, `Failed to create SOLOON at (${this.row}, ${this.column}, ${this.color})`);
            throw error;
        }
    }
}

module.exports = { Soloon };
