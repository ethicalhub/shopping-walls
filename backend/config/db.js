import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()


const connectDB = async ()=>{
    try{

        const conn = await mongoose.connect(process.env.MongoDB_URI, {
            useNewUrlParser : true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log('Database Connected')

    }
    catch(error){
        console.log(`Message : ${error.message}`)

    }
    
}

export default connectDB
