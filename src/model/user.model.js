//Mock Database
const {ApiError} = require("../payload/ApiError");
const db = require("../config/database");
const users = [{
        firstName: "John",
        lastName: "Doe",
        email: "example@examm.com",
        password: "1234"
    },
    {
        firstName: "Yusuf",
        lastName: "Ali",
        email: "xyz@examm.com",
        password: "1234"
    }];

//---------------------------//

const getUsers = async () => {
    let results = await db.executeQuery(`SELECT * FROM EMPLOYEE`);
    return results;
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