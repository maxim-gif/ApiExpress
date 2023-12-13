const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

const loggerUrl = require('./middleware/loggerUrl')
const cors = require('./middleware/cors')
const userRouter = require('./routes/user')
const bookRouter = require('./routes/book')

const mongoose = require('mongoose');


const app = express();

dotenv.config();


const { PORT = 3000, API_URL = 'http://127.0.0.1', MONGO_URL = 'mongodb://127.0.0.1:27017/backend' } = process.env;

mongoose.connect(MONGO_URL).catch(error => handleError(error));


app.use(loggerUrl)
app.use(cors)
app.use(bodyParser.json());
app.use(userRouter)
app.use(bookRouter)


app.get('/', (request, response) => {
    response.status(200);
    response.send("Hello, World!");
});




app.listen(PORT, () => {
    console.log(`Ссылка на сервер: ${API_URL}:${PORT}`);
});