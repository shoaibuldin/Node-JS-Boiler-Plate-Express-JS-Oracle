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
    return await db.executeQuery(`SELECT *
                                  FROM EMPLOYEE`);
}

const getUser = (email) => {
    return users.filter(u => u.email === email);
}

const getUserByEmailAndPassword = async (email, password) => {

    let result = await db.executeQuery(`SELECT * FROM USERS WHERE EMAIL='${email}' and PASSWORD='${password}'`)
    console.log("Reullt" +result);
    if (!result)
        return null;

    return result[0];
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