const express = require('express');
const PORT = 3000;

const app = express();

// app.get('/',(req,res) => {
//     res.send('Hello Express !');
// });

let middleware = {
    requiredAuthentication : function(req,res,next) {
        console.log(`Private hit log : ${req.url}`);
        next();
    },
    logger : function(req,res,next) {
        console.log(`Second Private Hit Log on ${new Date().toString()} : ${req.url}`);
        next();
    }
}

//It will going to be get called for every page requested and every route.

app.use(middleware.logger);


app.get('/about',middleware.requiredAuthentication,(req,res) => {
    res.send('About US !')
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT,() => {
    console.log(`Express server running on ${PORT}`);
});