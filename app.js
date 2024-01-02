import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-route.js';
import blogRouter from './routes/blog-route.js';


const app = express();
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);
 

mongoose.connect('mongodb+srv://admin:TEfKFgJMXvtvf29W@cluster0.cuzwsyc.mongodb.net/Blog?retryWrites=true&w=majority')
    .then(()=>app.listen(5000))
    .then(()=>console.log('Connected with database and Listening to 5000 port'))
    .catch((err)=>console.log(err));



//TEfKFgJMXvtvf29W