const fs = require('fs');
const readlineSync = require('readline-sync');

module.exports.displayBtc = async(req, res) => {
    const buyerBook = [], sellerBook = [];
    let userBalance = 5000000;
    let adminBalance = 100;
    while(1){
        console.log(buyerBook, '\t', sellerBook);
        let price=0, index = 0;
        const avgPrice = parseInt(fs.readFileSync('price.txt', 'utf8'));
        console.log('\n\n');
        console.log(`Admin Balance : ${adminBalance}BTC User Balance : $${userBalance}`);
        console.log('*********************************************************************************************************');
        const choice = readlineSync.question(`Press option 1 for buying (buyer), Press Option 2 for selling (admin) BTC/USD: $${avgPrice}  `);
        switch(choice){
            case '1':
                price = readlineSync.question('Enter buy price ');
                index = sellerBook.indexOf(price);
                if(index != -1){
                    console.log(`Order matched with order ${index} balance updated`);
                    userBalance -= price;
                    sellerBook.splice(index, 1);
                }
                else{
                    buyerBook.push(price);
                }
                break;
            case '2':
                price = readlineSync.question('Enter seller price ');
                index = buyerBook.indexOf(price);
                console.log(index);
                if(index != -1){
                    console.log(`Order matched with order ${index} balance updated`);
                    adminBalance -= 1;
                    buyerBook.splice(index, 1);
                }
                else{
                    sellerBook.push(price);
                }
                break;
            default:
                console.log('please enter a valid option');
                break;
        }
    }
    return res.status(200);
};


// can be used but i am a little unclear about the scenario present in the doc
const isValidPrice = (sellPrice, avgPrice) => {
    const aboveAvgPrice = avgPrice + avgPrice * 0.05;
    const belowAvgPrice = avgPrice - avgPrice * 0.05;
    return sellPrice > belowAvgPrice || sellPrice < aboveAvgPrice ? true : false
}