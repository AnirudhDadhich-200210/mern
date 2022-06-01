import mongose from 'mongoose'
import colors from 'colors'

// a mongoose stuf (mongoose.connect ....) return always a promise
const connectDB = async () => {
    try{
        const conn = await mongose.connect(process.env.MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`MongoDB Connected: ${process.env.MONGO_URI}`.cyan.underline)
       
    } catch (error) {
      console.log(`Error: ${error.message}`.red.underline.bold)
            process.exit(1)
    }
}

export default connectDB