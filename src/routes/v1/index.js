const express = require('express');
const router = express.Router();

const userRoute = require('./user.route');
const authRoute = require('./auth.route');


const routerPaths = [
    {
        path: '/auth',
        route: authRoute
    },
    {
        path: '/user',
        route: userRoute
    }
];

routerPaths.forEach(route=>{
    router.use(route.path, route.route)
})

module.exports = router;