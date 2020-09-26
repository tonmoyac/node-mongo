const express = require('express');

const app = express();

// function rootCall = (req, res) =>
//     res.send('Thank You Very Much')


app.get('/', (req, res) =>{
    res.send("Thank You Very Much for calling me")
})

app.listen(3000, () => console.log('Listening to port 3000'));
