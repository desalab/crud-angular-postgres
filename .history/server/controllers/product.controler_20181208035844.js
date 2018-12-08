
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
        const product = await pool.query('select * from products');
        res.json(product.rows);
    }catch(err){
        res.json(err);
    }
}

const postProduct = async (req,res) => {
    console.log(req.body);
    const {category,id_product,location,name,price} = req.body;
    try{
        const product = await pool.query('insert into products (name,category,location,price) values($1,$2,$3,$4)',
        [name,category,location,price]);
        res.json({status:'inserted success'});
    }catch(err){
        res.json(err);
    }
}

const putProduct = async (req,res) => {
    const id = parseInt(req.params.id);
    const {category,id_product,location,name,price} = req.body;
    try{
        const product = await pool.query('update products name=$1,category=$2,location=$3,price=$4 where id_product = $5',
        [name,category,location,price,id]);
        res.json({status:'updated success'});
    }catch(err){
        res.json(err);
    }
}

const deleteProduct = async (req,res) => {
    const id = parseInt(req.params.id);
    try{
        const product = await pool.query('delete from products where id_product = $1',
        [id]);
        res.json({status:'deleted success'});
    }catch(err){
        res.json(err);
    }
}

module.exports = {getProduct,postProduct,putProduct,deleteProduct}
