
const {Pool,Client} = require('pg');
const client = new Client();

const config = {
    user: "postgres", 
    host: "localhost", 
    database: "cognosdb", 
    password: "Desarr0ll0", 
    port: 5432,
    max: 10, 
    idleTimeoutMillis: 30000    
};

const cfg = require('../config.json');

const pool = new Pool(cfg);

const getProduct = async (req,res)=>{

    try{
        const product = await pool.query('select * from product');
        res.json(product.rows);
    }catch(err){
        res.json(err);
    }
}

module.exports = {getProduct}
