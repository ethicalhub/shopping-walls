import express from 'express'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import {notFound , errorHandler} from './middleware/errorMiddleWare.js'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

connectDB()

app.use('/api/products', productRoutes)


app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000

app.listen(PORT , ()=>{
    console.log(`Server is up and running on port : ${PORT}`);
})