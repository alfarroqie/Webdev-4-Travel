const { categorys } = require("../models");
const db = require("../models");
const News = db.news;
const Op = db.Sequelize.Op;

// Create and Save a new News
exports.create = (req, res) => {
    // Validate request
  if (!req.body.content) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
    return;
  }

  // Create a News
  const news = {
    title: req.body.title,
    publish: req.body.publish,
    content: req.body.content,
    locationLink: req.body.locationLink, 
    views: 0,
    pictLink: req.body.pictLink,
    userId: req.body.userId
  };

  // Save nNews in the database
  News.create(news)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the News."
      });
    });
};

// Retrieve all News from the database.
exports.findAll = (req, res) => {
  News.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving News."
      });
    });
};

// Find a single News with id
exports.findOne = (req, res) => {
  const id = req.params.id;

  News.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving News with id" + id
      });
    });
};

// Update a News by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  News.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "News updated !"
        });
      } else {
        res.send({
          message: `Cannot update News with id=${id}. Maybe News was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating News with id=" + id
      });
    });
};

// Delete a News with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  News.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "News deleted!"
        });
      } else {
        res.send({
          message: `Cannot delete News with id=${id}. Maybe News was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete News with id=" + id
      });
    });
};

// GET 3 Newest News
exports.findNewest = (req, res) => {
  const id = "SELECT * FROM news ORDER BY createdAt LIMIT 3";

  News.findNewest(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving News."
      });
    });
};

// Get Newest News
exports.getNewestNews = (req, res) => {
  const id = "SELECT * FROM news ORDER BY createdAt";
  News.findAll(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving News."
      });
    });
};

// GET 5 berita populer landing page
// exports.findAll = (req, res) => {
//   const category = req.query.category;
//   var condition = category ? { category: { [Op.iLike]: `%${category}%` } } : null;

//   Tutorial.findAll({ where: condition })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials."
//       });
//     });
// };
