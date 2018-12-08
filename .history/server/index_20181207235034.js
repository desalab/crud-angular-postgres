const express = require('express');
const cors = require('cors');
const app = express();

//setting
app.set('port',process.env.PORT || 3000);

//middleware
app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.json());

//routes
app.use('/apilab/products', require('./routers/products'));

//server
app.listen(app.get('port'),()=>{
    console.log('server on port ',app.get('port'))
});
