import mongoose from "mongoose";
import config from "./dotenv";


const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(" MongoDB Connected Successfully");
    } catch (error) {
        console.error(" MongoDB Connection Failed", error);
        process.exit(1);
    }
};




export default connectDB;