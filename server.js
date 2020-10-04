const express = require('express');
const app = express();
const port = 3000;

var budget= require('/Users/bhargavtedla/Dev/week03/personal-budget/budget.json');

app.use('/',express.static('public'));

app.get('/hello', (req,res) =>  {
    res.send('Hello world');
}); 
app.get('/budget', (req,res) =>  {
    res.json(budget);
}); 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});