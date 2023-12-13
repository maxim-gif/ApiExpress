const User = require('../models/user');

const getUsers = (request, response) => {
    User.find({})
        .then(user => {
            response.status(200).send(user);
        })
        .catch(e => {
            response.status(500).send(e.message);
        });
}

const getUser = (request, response) => {
    const { user_id } = request.params;
    User.findById(user_id)
        .then(user => {
            response.status(200).send(user);
        })
        .catch(e => {
            if (e.message.search("Cast to ObjectId failed for value") !== -1) {
                return response.status(404).send("Данные не найдены")
            }
            response.status(500).send(e.message);
        });
}

const createUser = (request, response) => {
    const data = request.body;
    User.create(data)
        .then(user => {
            response.status(201).send(user);
        })
        .catch(e => {
            response.status(500).send(e.message);
        });
}

const updateUser = (request, response) => {
    const { user_id } = request.params;
    const data = request.body;
    User.findByIdAndUpdate(user_id, data, { new: true, runValidators: true })
        .then(user => {
            response.status(200).send(user);
        })
        .catch(e => {
            if (e.message.search("Cast to ObjectId failed for value") !== -1) {
                return response.status(404).send("Данные не найдены")
            }
            response.status(500).send(e.message);
        });
}

const deleteUser = (request, response) => {
    const { user_id } = request.params;
    User.findByIdAndDelete(user_id)
        .then(user => {
            response.status(200).send("Done");
        })
        .catch(e => {
            if (e.message.search("Cast to ObjectId failed for value") !== -1) {
                return response.status(404).send("Данные не найдены")
            }
            response.status(500).send(e.message);
        });
}

module.exports = {getUsers, getUser, createUser, updateUser, deleteUser}