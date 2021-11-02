const express = require('express');
const cron = require('node-cron');
const btc = require('./http/getBTC');

// set up our express app
const app = express();

cron.schedule('*/5 * * * * *', async() => {
    await btc.getBTC();
});

app.use(express.static('public'));

app.use(express.json());
// initialize routes
app.use('/api',require('./routes/BtcOrder'));

// error handling middleware
app.use(function(err,req,res,next){
    //console.log(err);
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('Ready to Go! running on port 4000');
});

module.exports = app;