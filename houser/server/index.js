require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controller');
const cors=require('cors');
const massive=require('massive');
const app = express();
const port = 3005;

app.use(bodyParser.json());
app.use( cors());

massive( process.env.CONNECTION_STRING ).then(dbInstance=>{
    app.set('db', dbInstance);
});




app.listen(port, () => console.log(`listening on port ${port}`));