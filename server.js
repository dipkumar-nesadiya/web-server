const express = require('express');
const PORT = process.env.PORT || 3000; //Deploy on heroku, we have to use heroku port so we used process.env.PORT or 3000 by default
const middleware = require('./middleware.js');

const app = express();

// app.get('/',(req,res) => {
//     res.send('Hello Express !');
// });

//It will going to be get called for every page requested and every route.

app.use(middleware.logger);


app.get('/about',middleware.requiredAuthentication,(req,res) => {
    res.send('About US!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT,() => {
    console.log(`Express server running on ${PORT}`);
});