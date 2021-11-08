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
                                  FROM USERS`);
}

const getUser = (email) => {
    return users.filter(u => u.email === email);
}

const getUserByEmailAndPassword = async (email, password) => {

    let result = await db.executeQuery(`SELECT U.USERID, U.FULLNAME, U.EMAIL, R.ROLENAME
                                        FROM USERS U
                                                 INNER JOIN USERROLE UR on U.USERID = UR."userId"
                                                 INNER JOIN ROLES R on UR."roleId" = R.ROLEID
                                        WHERE EMAIL = :email
                                          AND PASSWORD = :password
                                          AND ACTIVE = 1`, [email, password])

    if (!result)
        return null;

    return result[0];
}

const create = async (user) => {
    let email = user.email;
    let password = user.password;
    let fullName = user.fullName;
    let active = 0;

    let result = await db.executeQuery(`INSERT INTO USERS (USERID, EMAIL, PASSWORD, FULLNAME, ACTIVE)
                                        VALUES (USER_SEQ.nextval, :email, :password, :fullName,:active)`
                                        , [email, password, fullName, active]);
    if (result.rowsAffected === 1)
        return true;

    return false;
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