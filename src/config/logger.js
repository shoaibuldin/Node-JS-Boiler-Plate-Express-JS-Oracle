const winston = require('winston');
const { combine, timestamp, label, printf } = winston.format;


const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = winston.createLogger({
    format: combine(
        //winston.format.colorize(),
        label({ label: process.env.PROJECT_NAME }),
        timestamp(),
        myFormat
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: 'info.log'
        }),
        new winston.transports.File({
            filename: 'errors.log',
            level: 'error'
        })
    ]
});

module.exports = logger;