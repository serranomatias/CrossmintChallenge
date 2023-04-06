const { baseUrl, candidateId } = require('../utils/constants');
const { callApi } = require('../utils/callApi');
const { handleError } = require('../utils/handleError');

class Cometh {
    constructor(row, column, direction) {
        this.row = row;
        this.column = column;
        // Have to use `toLowerCase()` because the raw object
        // is uppercase, and the api accept the keys in
        // lowerCase.
        this.direction = direction.toLowerCase();
    }

    async create() {
        const comethsUrl = `${baseUrl}/comeths`;
        try {
            const data = { row: this.row, column: this.column, direction: this.direction, candidateId };
            const response = await callApi('post', comethsUrl, data);
            console.log(`Created 🚀COMETH at (${this.row}, ${this.column}, ${this.direction})`);
            return response.data;
        } catch (error) {
            handleError(error, `Failed to create Cometh at (${this.row}, ${this.column}, ${this.direction})`);
            throw error;
        }
    }
}

module.exports = { Cometh };