const mongoose = require('mongoose');

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL || 'mongodb://3.36.122.203:27017/ddubuckcho', {
      ignoreUndefined: true,
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = connect;
