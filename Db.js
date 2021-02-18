const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost:27017/Todos',
    {   useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    (err) => {
        if(!err){
            console.log("MongoDB Successfully Connected.")
        }
        else{
            console.log("Error in DB connetion: " + err)
        }
    }
);