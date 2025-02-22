import express from 'express';

import { connectDB } from './db';

const app = express();

const PORT = 3000;

connectDB()
.then(()=>{
    app.listen(8000,()=>{
        console.log(`Server is running on PORT:${process.env.PORT}`); 
    })
})
.catch((err)=>{
    console.log(`SQL Failed!!`,err);
    
});


