const mongoose=require('mongoose');

const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://pbrathmesh:wqjI3UFi4m6nun8U@cluster0.bdh8lef.mongodb.net/devConnect')
}
module.exports=connectDB
connectDB().then(()=>{console.log('Db connected Sucessfully ')})
.catch((err)=>{console.log('db cant be executed due to ',err)});

