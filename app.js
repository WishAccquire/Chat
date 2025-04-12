import express, { response } from 'express'
import morgan from 'morgan';
import connect from './dB/db.js';
import userRoutes from './routes/user.routes.js'
import cookieParser from 'cookie-parser';
import cors from 'cors'
connect();



const app=express();
app.use(cors())
app.use(morgan('dev'))
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended:true}));
app.use("/users",userRoutes)

app.get('/',(req,res)=>{
    res.send("Chal gaya Mein");
})

export default app;