import mongoose from 'mongoose';
const connectDb = (dbPath) => {
    try{
        return mongoose.connect(dbPath, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
    }
   catch (e) {
       console.log(e);
       return null;
   }
};

export default connectDb;