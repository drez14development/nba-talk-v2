import mongoose from 'mongoose';

const MONGO_URI = "mongodb+srv://admin:blablabla14@cluster0.tmwbk.mongodb.net/?retryWrites=true&w=majority";
const connection = {};

async function dbConnect(){
    if(connection.isConnected){
        return;
    }

    const db = await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected)
}

export default dbConnect;