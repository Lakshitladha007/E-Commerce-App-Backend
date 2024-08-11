const mongoose = require('mongoose');
const { DB_URI } = require('./server-config');

const connect =async () => {
     await mongoose.connect(`${DB_URI}`);
}

module.exports=connect;