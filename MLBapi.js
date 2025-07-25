const fetch = require('node-fetch');

const API_KEY = 'RFQ7NmSROsUJVGKPIHyP415oURQE95eATZXhuXoi';
const url = `https://api.sportradar.us/nfl/official/trial/v7/en/games/2024/REG/3/schedule.json?api_key=${API_KEY}`;

async function getMLBGames(){
    try{
        const response = await fetch(url); 
        const data = await response.json();

        console.log(JSON.stringify(data, null, 2));

    }
    catch(error){
        console.error("Error fetching data:", error);
    }

}