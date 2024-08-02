import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://caconeves:caio1029@cluster0.kinnc5y.mongodb.net/cacostore').then(() => console.log('MongoDB Connected'));
}