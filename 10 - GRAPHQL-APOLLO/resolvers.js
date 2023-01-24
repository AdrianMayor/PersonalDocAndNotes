const getAllUsers = require('./controllers/users/getAllUsers');
const getUserById = require('./controllers/users/getUserById');
const createUser = require('./controllers/users/createUser');
const loginUser = require('./controllers/users/loginUser');
const updatePass = require('./controllers/users/updatePass');
const deleteUser = require('./controllers/users/deleteUser');

const resolvers = {
    Query: {
        getAllUsers,
        getUserById,
    },
    Mutation: {
        createUser,
        loginUser,
        updatePass,
        deleteUser,
    },
};

module.exports = resolvers;
