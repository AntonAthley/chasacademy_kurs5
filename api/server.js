const express = require("express");
const app = express();
const initDb = require("./initDb");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swaggerConfig");

initDb();

/**
 * @openapi
 * /:
 *   get:
 *     summary: Root endpoint yeye
 *     responses:
 *       200:
 *         description: Returns a hello world message
 */

app.get("/", (req, res) => {
  res.send("Hello world! Docker, Azure & CI/CD test");
});

/**
 * @openapi
 * /error:
 *   get:
 *     summary: Simulates an intentional server error
 *     responses:
 *       500:
 *         description: Simulated server error
 */

app.get("/error", (req, res) => {
  console.error("Intentional test error");
  res.status(500).send("Server error simulated for monitoring test");
});

/**
 * @openapi
 * /health:
 *   get:
 *     summary: Health check endpoint
 *     responses:
 *       200:
 *         description: Service is healthy
 */

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP", timestamp: Date.now() });
});

const PORT =
  Number(process.env.WEBSITES_PORT) || Number(process.env.PORT) || 3000;
app.listen(PORT, () => console.log(`Server port: ${PORT}`));
