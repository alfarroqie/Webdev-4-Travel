const db = require("../models");
const Roles = db.roles;
const Op = db.Sequelize.Op;

// Create and Save a new Roles
exports.create = (req, res) => {
    // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "name can not be empty!"
    });
    return;
  }

  // Create a Roles
  const roles = {
    name: req.body.name,
    description: req.body.description
  };

  // Save Roles in the database
  Roles.create(roles)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Roles."
      });
    });
};

// Retrieve all Roles from the database.
exports.findAll = (req, res) => {
  Roles.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Roles."
      });
    });
};

// Find a single Roles with id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Roles.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Roles with id" + id
      });
    });
};

// Update a Roles by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Roles.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Roles updated !"
        });
      } else {
        res.send({
          message: `Cannot update Roles with id=${id}. Maybe Roles was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Roles with id=" + id
      });
    });
};

// Delete a Roles with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Roles.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Roles deleted!"
        });
      } else {
        res.send({
          message: `Cannot delete Roles with id=${id}. Maybe Roles was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Roles with id=" + id
      });
    });
};


