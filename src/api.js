const express = require('express');
const dotenv = require('dotenv');


const app = express();

dotenv.config();
const { PORT = 3000, API_URL = 'http://127.0.0.1' } = process.env;

app.get('/', (request, response) => {
    response.status(200);
    response.send("Hello, World!");
});

app.listen(PORT, () => {
    console.log(`Ссылка на сервер: ${API_URL}:${PORT}`);
});