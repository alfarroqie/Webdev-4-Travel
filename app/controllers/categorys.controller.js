const db = require("../models");
const Categorys = db.categorys;
const Op = db.Sequelize.Op;

// Create and Save a new Categorys
exports.create = (req, res) => {
    // Validate request
  if (!req.body.name || !req.body.isLocation) {
    res.status(400).send({
      message: "Name and isLocation can not be empty!"
    });
    return;
  }

  // Create a Categorys
  const categorys = {
    name: req.body.name,
    isLocation: req.body.isLocation
  };

  // Save Categorys in the database
  Categorys.create(categorys)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Categorys."
      });
    });
};

// Retrieve all Categorys from the database.
exports.findAll = (req, res) => {
  Categorys.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving categorys."
      });
    });
};

// Find a single Categorys with id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Categorys.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Categorys with id" + id
      });
    });
};

// Update a categorys by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Categorys.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Categorys updated !"
        });
      } else {
        res.send({
          message: `Cannot update Categorys with id=${id}. Maybe Categorys was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Categorys with id=" + id
      });
    });
};

// Delete a Categorys with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Categorys.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Categorys deleted!"
        });
      } else {
        res.send({
          message: `Cannot delete Categorys with id=${id}. Maybe Categorys was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Categorys with id=" + id
      });
    });
};

// GET All Categorys with Location
exports.findAll = (req, res) => {
  const location = req.query.location;
  var condition = location ? { location: { [Op.iLike]: `%${location}%` } } : null;

  Categorys.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};


