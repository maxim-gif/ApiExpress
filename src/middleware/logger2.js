const logger2 = (request, response, next) => {
    console.log("log 2");
    next()
}

module.exports = logger2;