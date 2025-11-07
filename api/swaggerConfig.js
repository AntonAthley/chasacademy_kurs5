const swaggerJsdoc = require("swagger-jsdoc");
const path = require("path");
const { title } = require("process");
const { version } = require("os");
const { url } = require("inspector");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API dokumentation",
      version: "1.0.0",
      description: "DevOps demo API",
    },
    servers: [{ url: "/api" }],
  },

  apis: [path.resolve(__dirname, "server.js")],
};

const specs = swaggerJsdoc(options);
module.exports = specs;
