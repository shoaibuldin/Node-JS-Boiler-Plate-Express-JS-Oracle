//Mock Database
const {ApiError} = require("../payload/ApiError");
const users = [{
        firstName: "John",
        lastName: "Doe",
        age: 24,
        email: "example@examm.com",
        password: "1234"
    },
    {
        firstName: "Yusuf",
        lastName: "Ali",
        age: 24,
        email: "xyz@examm.com",
        password: "1234"
    }];

//---------------------------//

const getUsers = () => {
    return users;
}

const getUser = (email) => {
    return users.filter(u => u.email === email);
}

const getUserByEmailAndPassword = (email, password) => {
    return users.filter(u => u.email === email
        && u.password === password);
}

const create = (user) => {
    users.push(user);
    return true;
}

const isEmailExist = (email) => {
    return users.filter(u => u.email === email).length > 0;
}


module.exports = {
    create,
    getUser,
    getUsers,
    isEmailExist,
    getUserByEmailAndPassword
}