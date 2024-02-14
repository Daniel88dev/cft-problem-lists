const express = require("express");
const sequelize = require("./Models/index");
const contactRoutes = require("./Routes/testRoute");

const app = express();
const PORT = process.env.PORT || 5000;

// Use built-in express.json() middleware for parsing JSON
app.use(express.json());

app.use("/contacts", contactRoutes);

// Code inside this block is executed after synchronization is complete
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
