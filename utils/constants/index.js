require('dotenv').config({path: '.env'});
const baseUrl = 'https://challenge.crossmint.io/api';
const goalUrl = `${baseUrl}/map/${process.env.candidateId}/goal`;
const candidateId = process.env.candidateId;



module.exports= {baseUrl, goalUrl, candidateId};