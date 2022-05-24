import express from "express";

const app = express();

app.get("/users", (req, res) => {
  return res.json([
    {
      name: "John Doe",
      age: 32,
    },
  ]);
});

app.listen(3333, () => {
  console.log("Server started on port 3333!");
});
