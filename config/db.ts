import mongoose from 'mongoose';

const mongoDBConnection = async (): Promise<void> => {
    try {
        const mongoURI: string = process.env.MONGO_URI || "";
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

export default mongoDBConnection;
