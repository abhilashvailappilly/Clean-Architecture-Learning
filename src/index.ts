import {createServer as server} from './infrastructure/config/app';
import mongoose from 'mongoose';

async function getMongoDS() {
    try {
        await mongoose.connect('mongodb://localhost:27017/cleanProduct');
        console.log('MongoDB database connection established successfully 🚀');
        // return new MongoDBProductDataSource();
        console.log("conected :::")
        return
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error; // Rethrow the error for further handling or termination
    }
} 

(async () => {
    const dataSource = await getMongoDS();
 const newServer =  server()
    newServer?.listen(4000, () => console.log('Running on http://localhost:4000'));
})();
