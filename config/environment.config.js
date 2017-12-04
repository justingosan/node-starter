if (process.env.NODE_ENV) {
  require('dotenv')
    .config({
      path: `./.env.${process.env.NODE_ENV}`,
    });
} else {
  throw new Error('NODE_ENV must be defined');
}

// ################################################################################
// #                                                                           main
// ################################################################################
module.exports.NODE_ENV = process.env.NODE_ENV;
module.exports.APP_NAME = process.env.APP_NAME;
module.exports.HOST = process.env.HOST;
module.exports.PORT = process.env.PORT;
module.exports.PROTOCOL = process.env.PROTOCOL;
