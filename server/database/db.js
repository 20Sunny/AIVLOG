import mongoose from 'mongoose';

const Connection = async(username, password) => {
    const URL = `mongodb://${username}:${password}@ac-rspngpo-shard-00-00.r55xpfh.mongodb.net:27017,ac-rspngpo-shard-00-01.r55xpfh.mongodb.net:27017,ac-rspngpo-shard-00-02.r55xpfh.mongodb.net:27017/?ssl=true&replicaSet=atlas-3ewlj6-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;