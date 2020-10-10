const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());

const budget= require('/Users/bhargavtedla/Dev/week03/personal-budget/budget.json');



app.get('/hello', (req,res) =>  {
    res.send('Hello world');
}); 
app.get('/budget', (req,res) =>  {
    res.json(budget);
}); 

app.listen(port, () => {
    console.log(`API Served at http://localhost:${port}`)
});