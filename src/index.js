require('dotenv').config();
const express = require('express');
const morganMiddeware = require('./middlewares/morgan');
const logger = require('./config/logger');
const {ApiError} = require("./payload/ApiError");
const httpStatus = require('http-status');
const helmet = require("helmet");
const cors = require("cors");

const app = express();
const port = process.env.PORT;


/**
 * Middlewares
 */
app.use(express.json())
app.use(morganMiddeware);
/*
// adding Helmet to enhance your API's security
app.use(helmet());
// enabling CORS for all requests
app.use(cors());
*/

/**
 * Router Middleware
 * @type {Router}
 */
const routeCatalog = require('./routes/v1');
app.use(process.env.API_VERSION, routeCatalog);

// Unknown API Error Handling
app.use((req, res, next) => {

    let status = httpStatus.NOT_FOUND;
    let error = "Api not Found";
    res.status(status).send(new ApiError(status, error));
});

// All error handling exception middleware
/*app.use((err, req, res, next) => {
    res.status(500).send(err)
})*/


app.listen(port, () => {
    logger.info(`The app is running on ${process.env.BASE_URL}:${port}`);
});