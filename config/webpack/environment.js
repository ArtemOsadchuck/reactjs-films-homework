const env = process.env.NODE_ENV;
const environment = {
    __DEV__: env === 'development',
    __PROD__: env === 'production',
};

module.exports = environment;
