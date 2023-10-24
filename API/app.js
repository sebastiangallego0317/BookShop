const express = require("express");
const cors = require("cors");
const sql = require("mysql2");
const connection = sql.createConnection({
  database: "BooksShop",
  host: "localhost",
  user: "root",
});

connection.connect();
const { PORT } = require("./config.js");
const app = express();

app.use(
  cors({ origin: "*", allowedHeaders: "*", methods: "*", credentials: false })
);

app.get("/books", (req, res) => {
  connection.query("SELECT * FROM books", (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.post("/buy", (req, res) => {
  const itemId = req.query.id;
  const itemQuantity = req.query.quantity;
  try {
    connection.query(
      `UPDATE books SET stock = stock - ${itemQuantity} WHERE id = ${itemId}`,
      (err) => {
        if (err) throw err;
        console.log(`${itemId} actualizado correctamente`);
      }
    );
    res.send("Compra realizada con éxito");
  } catch (ex) {
    res.status(404).send(ex);
  }
});

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
