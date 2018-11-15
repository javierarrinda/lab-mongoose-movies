

const mongoose = require('mongoose');

connect('mongodb://localhost/Celebrity' , {useMongoClient: true})
.then(()=>{
    console.log('working');
})
.catch((err)=>{
  next(err);
})
