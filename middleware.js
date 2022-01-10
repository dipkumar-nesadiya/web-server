module.exports = {
    requiredAuthentication: function (req, res, next) {
        console.log(`Private hit log : ${req.url}`);
        next();
    },
    logger: function (req, res, next) {
        console.log(`Second Private Hit Log on ${new Date().toString()} : ${req.url}`);
        next();
    }
}