const logger1 = (request, response, next) => {
    console.log("log 1");
    next()
}

module.exports = logger1;