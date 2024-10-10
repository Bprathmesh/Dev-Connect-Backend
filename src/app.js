const express=require('express')
const app=express()
const port= 7777
const connectDB=require('./config/database');
const User=require('./models/user');

app.post('/signup', async (req,res)=>{
    //creating a new instance of user model 
    const user=new User();

    await user.save(); // returns a promise most of mongoose fn 
    res.send('User Added Sucessfully')

})


connectDB()
    .then(()=>{
        console.log('Db connected Sucessfully ')
        app.listen(port,()=>console.log(`server is running at port ${port}`))
    })
    .catch((err)=>{
        console.log('db cant be executed due to ',err)
    });

