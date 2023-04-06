const { goalUrl } = require('../utils/constants');
const { Polyanet } = require('../utils/createPolyanet');
const { Cometh } = require('../utils/createCometh');
const { Soloon } = require('../utils/createSoloons');
const { handleError } = require('../utils/handleError');
const { callApi } = require('../utils/callApi');


async function CreateCrossmintMap() {

    try {
        // Call the goal map endpoint to get the HTML response
        const response = await callApi('get', goalUrl);

        const goalMap = response.data;

        // Encapsulate logic for splitting cometh direction
        // and soloon color in a separate function.
        function getStringProps(string) {
            // the string for cometh could be `UP_COMETH`
            // then should separate on the `_` and `1` for
            // take what the string have before the `_`.
            // Split() returns a array then after use it,
            // needs to select `[0]` the first element.
            return string.split("_", 1)[0];
        }

        // The loop allow me to know the exact coord of each
        // element on the goalMap
        for (let row = 0; row < goalMap.goal.length; row++) {
            for (let column = 0; column < goalMap.goal[row].length; column++) {

                const goalObject = goalMap.goal[row][column];

                if (goalObject === "POLYANET") {
                    const polyanet = new Polyanet(row, column);
                    await polyanet.create();

                } else if (goalObject.includes("COMETH")) {
                    const direction = getStringProps(goalObject);
                    const cometh = new Cometh(row, column, direction);
                    await cometh.create();

                } else if (goalObject.includes("SOLOON")) {
                    const color = getStringProps(goalObject);
                    const soloon = new Soloon(row, column, color);
                    await soloon.create();

                }
                // add a delay of 1000 milliseconds (1 second)
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        }

    } catch (error) {
        handleError(error, 'Failed to create objects from goal map');
        throw error;
    }
}

CreateCrossmintMap();