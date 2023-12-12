const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')
const userRouter = require('./routes/user')
const logger1 = require('./middleware/logger1')
const logger2 = require('./middleware/logger2')
const mongoose = require('mongoose');


const app = express();

dotenv.config();


const { PORT = 3000, API_URL = 'http://127.0.0.1', MONGO_URL = 'mongodb://127.0.0.1:27017/backend' } = process.env;

mongoose.connect(MONGO_URL).catch(error => handleError(error));

app.use(cors())
app.use(bodyParser.json());
app.use(userRouter)


app.get('/', (request, response) => {
    response.status(200);
    response.send("Hello, World!");
});

app.use(logger1)
app.use(logger2)

app.post('/', (request, response) => {
    response.status(200);
    response.send("Hello, Post");
});




app.listen(PORT, () => {
    console.log(`Ссылка на сервер: ${API_URL}:${PORT}`);
});