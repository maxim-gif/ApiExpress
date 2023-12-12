const getUsers = (request, response) => {
    response.status(200);
    response.send("Hello, World!");
}

const getUser = (request, response) => {
    const { user_id } = request.params;
    response.status(200);
    response.send(`User id: ${user_id}`);
}

const createUser = (request, response) => {
    response.status(200);
    response.send("Hello, World!");
}

const updateUser = (request, response) => {
    response.status(200);
    response.send("Hello, World!");
}

const deleteUser = (request, response) => {
    response.status(200);
    response.send("Hello, World!");
}

module.exports = {getUsers, getUser, createUser, updateUser, deleteUser}