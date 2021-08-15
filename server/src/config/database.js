const mongoose = require('mongoose');

require('dotenv').config()

const connect = async () => {
  const mongoConnectionString = "mongodb+srv://admin:admin@booking.kghwr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  try {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex : true
    };
    await mongoose.connect(mongoConnectionString, opts);
    // eslint-disable-next-line no-console
    console.log('Successfully Connected to Database');
    logger.debug({ mongoConnectionString });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Unable to establish connection to Database');
    logger.error(`Fail to connect with database ${mongoConnectionString}`);
  }
};
module.exports = { connect };
