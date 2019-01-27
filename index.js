const express = require("express");
const bodyParser = require('body-parser');
const app = express();
var cloudinary = require('cloudinary');
'use strict';




app.listen(5000, () => console.log('started'));

app.use(function (req, res, next) {
    cloudinary.config({
        cloud_name: 'dsldbhfav',
        api_key: '489315487456671',
        api_secret: '3WI8xTMJGaQMMy9hy4DsZjJoKko'
    });
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());


app.post('/tradeinfo', (req, res) => {
    //console.log('tradeinfo');
    var body = req.body
    //console.log(body.image);
    cloudinary.v2.uploader.upload(body.image,
        function (error, result) {
            console.log(result.secure_url);
            
            res.json({url: result.secure_url});
            
            //console.log(result)
            
        });
    
})


app.get('/', (req, res) => {



    res.send(`${req.headers.accept}`);


});

app.get('/test', (req, res) => {

    res.json(
        {

            hello: 'world',
            arr: ['hello', 'world']
        });
});

