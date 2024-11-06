const mongoose = require('mongoose');

const connectionDatabase = ()=>{
    mongoose.connect(process.env.DB_URL).then((con)=>{
        console.log('connected to mongodb host'+ con.connection.host)
    })
}

module.exports = connectionDatabase;