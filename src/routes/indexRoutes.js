const tasksRouter = require("./tasksRouter");

const apiRouter = (app) => {
    app.use("/tasks", tasksRouter);
};

module.exports = apiRouter;