const loggerUrl = (request, response, next) => {
    console.log(request.originalUrl);
    next()
}

module.exports = loggerUrl;