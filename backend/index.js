import dotenv from 'dotenv';
dotenv.config();
import app from './app.js';
import connectDB from './config/db.js';


// Connect to MongoDB
connectDB()
.then(()=>{
    console.log("MongoDB database connection established successfully !!!")
})
.catch((error)=>{
    console.log(`MongoDB connection error: ${error.message}`)
})

app.get('/', (req, res) => {
    res.send('API is running....');
}
);

// Start the server

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});