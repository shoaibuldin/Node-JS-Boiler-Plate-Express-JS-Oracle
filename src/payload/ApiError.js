class ApiError extends Error{
    constructor(status, error, stack){
        super(error);
        this.status = status;
        this.error = error;
        this.stack = stack;
    }
}

module.exports = {
    ApiError
}


/*

module.exports = {
    status:404,
    message:"No Found",
    error: "database error",
    stack: "logs of the error"
}*/
