module.exports = (req, res) => {
  const name = req.query.name || "World";

  res.status(200).send(`Hello, ${name}`);
};
