// Importing Packages
const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());

// Creating Object of Genre
const genres = [
  { id: 1, name: "Action" },
  { id: 2, name: "Horror" },
  { id: 3, name: "Mystery" },
  { id: 4, name: "Sci-Fi" },
];

// ********* Adding Route of GET Request ********
app.get("/api/genres/", (req, res) => {
  res.send(genres);
});

// ******** Adding Route of POST Request ********
app.post("/api/genres/", (req, res) => {
  // Validate
  const { error } = validateGenre(req.name);
  // If invalid, return 400 - bad request
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const genre = {
    id: genres.length + 1,
    name: req.body.name,
  };

  genres.push(genre);
  res.send(genre);
});

// ********** Adding Route of PUT Request **********
app.put("/api/genres/:id", (req, res) => {
  // Look up the Genre
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  // If not sxisting, return 404
  if (!genre) {
    return res.status(404).send("The genre with given ID is not found");
  }

  // Validate
  const { error } = validateGenre(req.name);
  // If invalid, return 400 - bad request
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  // Update Genre
  genre.name = req.body.name;
  res.send(genre);
});

// ************ Adding Route of DELETE Request ***********
app.delete("/api/genres/:id", (req, res) => {
  // Look up the Genre
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  // If not existing, return 404
  if (!genre) {
    return res.status(404).send("The genre with given ID is not found");
  }

  // Delete
  const index = genres.indexOf(genre);
  genres.splice(index, 1);

  // Return the same Code
  res.send(genre);
});

// ************ Function of Validatio *********
function validateGenre(genre) {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return Joi.validate(genre, schema);
}

// ************ Adding Route of Another GET Request ********
app.get("/api/genres/:id", (req, res) => {
  // Look up the Genre
  const genre = genres.find((c) => c.id === parseInt(req.params.id));

  // if not existing,  return 404
  if (!genre) {
    return res.status(404).send("The genre with given ID is not found");
  }

  res.send(genre);
});

//********* PORT ***********
const port = process.env.PORT || 1000;
app.listen(port, () => {
  console.log(`Listening on Port ${port}...`);
});