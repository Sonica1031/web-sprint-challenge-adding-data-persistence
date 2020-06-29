const express = require("express");
const { SSL_OP_CIPHER_SERVER_PREFERENCE } = require("constants");
const server = express();
server.use(express.json());

const projectRoutes = require("./Routes/projectRoutes");
const resourceRoutes = require("./Routes/resourceRoutes");
const taskRoutes = require("./Routes/taskRoutes");

server.use("/", projectRoutes)
server.use("/", resourceRoutes)
server.use("/:id/task", taskRoutes)

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({errorMessage: "Something went wrong!"})
})

server.listen(5000, () => {
    console.log("API running on port 5000")
})