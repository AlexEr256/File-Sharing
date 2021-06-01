
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path')
const initDB = require('./db');

require('dotenv').config();

const PORT =  process.env.PORT || 3000 ;

app.use(cors());
app.use(express.json());

initDB();


app.use('/', require('./routes/upload'));
app.use('/', require('./routes/download'));



app.listen(PORT, (err) => {
    if(err){
        throw new Error(err)
    }
    console.log(`http://localhost:${PORT}`);  

});