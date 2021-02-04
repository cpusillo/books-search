const db = require("../models");

module.exports = {
    // Find all the books that are saved to our db.
  findAll: function(req, res) {
    db.Book.find(req.query).then(data => res.json(data))
      .catch(err => {
        console.error(err)
      });
  },
    // Find saved book by its unique ID in our db.
  findById: function(req, res) {
    db.Book.findById(req.params.id).then(data => res.json(data))
      .catch(err => {
        console.error(err)
      });
  },
    // Create a new book
  create: function(req, res) {
    db.Book.create(req.body).then(data => res.json(data))
      .catch(err => {
        console.error(err)
      });
  },
    // Update a book record
  update: function(req, res) {
    db.Book.findOneAndUpdate({ _id: req.params.id }, req.body).then(data=> res.json(data))
      .catch(err => {
        console.error(err)
      });
  },
    // Delete a book record
  remove: function(req, res) {
    db.Book.findById({ _id: req.params.id }).then(data => data.remove()).then(data => res.json(data))
      .catch(err => {
        console.error(err)
      });
  }
};