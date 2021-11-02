const axios = require('axios');
const fs = require('fs');

module.exports.getBTC = async() => {
    return await axios.get('https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT')
    .then((response) => {
        const writeStream = fs.createWriteStream('price.txt') 
        writeStream.write(response.data.price);
    })
    .catch((error) => {
      console.log(error);
    })
}