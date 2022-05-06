
1. **Introduction**\
   This app is a boilerplate

2. **Project Structure**
- src
  - controller
  - model
  - service
  - util
  - routes
  - payload
  - middlewares
  - validations
  - config


3. **Libraries**
- Express
- Body parser
- Morgan - To Logs Rest Calls
- Dot Env
- JOI
- Winston - use for logging purposes
- Cors - Cross Origin resource sharing
- helmet - determine the header in express


4. **Database**
- Oracle

5. **Problem**
- We need to switch database from oracle -> mysql/postgres. (HINT: config folder)
- Integrate Registration Mechanism in this project

6. **HINTS**
- To navigate any API
- Follow the pattern of package.json -> "start" script -> go to file (index.js) -> route -> controller -> service -> model