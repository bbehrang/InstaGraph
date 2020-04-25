import mongoose from 'mongoose';
const connectToDb = (path) => {
    try{
        return mongoose.connect(path, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
    }
   catch (e) {
       console.log(e);
       return null;
   }
};

export default connectToDb;