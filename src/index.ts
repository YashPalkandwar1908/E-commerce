import express from 'express';
import usersRouter from './routes/users'
import { connectDB } from './db';

const app = express();

app.use(express.json())
app.use('/api/users', usersRouter)



connectDB()
.then(()=>{
    app.listen(8000,()=>{
        console.log(`Server is running on PORT:${process.env.PORT}`); 
    })
})
.catch((err)=>{
    console.log(`SQL Failed!!`,err);
    
});


