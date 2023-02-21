import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

export default async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
    } catch(err) {
        console.log(err);
    }
}