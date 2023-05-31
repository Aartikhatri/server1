dotenv.config();
import  express  from "express";
import  jwt  from "jsonwebtoken";
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from "body-parser";
import DbConnection from './database/db.js'
import defaultData from "./default.js";
import webRoute from './routes/route.js'

const app = express();

const DB_CONNECT = process.env.DB_Url
const port = process.env.PORT || 8000;

DbConnection(DB_CONNECT)



app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json({extended : true }))



// setting for router
app.use('/' , webRoute )

// port listening
app.listen(port , ()=>{
    console.log(`server is started ${port}`);
})

// setiing default data to server
defaultData()