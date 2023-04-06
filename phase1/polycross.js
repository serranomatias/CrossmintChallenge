const { Polyanet } = require('../utils/createPolyanet');


async function createPolyanetCross() {

  for (let row = 0; row < 11; row++) {

    for (let col = 0; col < 11; col++) {
    
      if ((row === col && col > 1 && col < 9) || (row + col === 10 && col > 1 && col < 9)) {

        const polyanet = new Polyanet(row, column);
        await polyanet.create();
      }

      // add a delay of 1000 milliseconds (1 second)
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}

createPolyanetCross();
