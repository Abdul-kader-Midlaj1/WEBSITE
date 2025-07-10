import mongoose from 'mongoose';

const connectDB = async () => {
  mongoose.connection.on('connected', () => {
    console.log('DB Connected');
  });

  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.error('DB connection error:', error);
  }
};

export default connectDB;
