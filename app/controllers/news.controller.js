const { categorys } = require("../models");
const db = require("../models");
const News = db.news;
const Categorys = db.categorys;
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
//Retrieve all News from the database or by search.
exports.findBySearch= (req, res) => {
  const title = req.params.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  News.findAll({ where: condition })
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

exports.addNewsCategory = (req, res) => {
  return News.findByPk(req.body.newsId)
    .then((news) => {
      if (!news) {
        console.log("News not found");
        return null;
      }
      return Categorys.findByPk(req.body.categoryId).then((categorys) => {
        if (!categorys) {
          console.log("Category not found");
          return null;
        }

        news.addCategory(categorys);
        res.send(news);
      });

    })
    .catch((err) => {
      console.log(">> Error while add news category: ", err);
    });
};

// Get Newest News
exports.getNewestNews = (req, res) => {
  News.findAll({order: [['createdAt', 'ASC']]})
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

//GET 3 berita terbaru
exports.findNewest = (req, res) => {
  News.findAll({where:{order: [['createdAt', 'ASC']]},limit:3})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error while retrieve news with category"
      });
    });
}

//get news with category
exports.getNewsandCategory = (req,res) => {
  return News.findAll({
    include: [
      {
        model: Categorys,
        as: "categories",
        attributes: ["id", "name"],
        through: {
          attributes: [],
        },
      },
    ],
  })
    .then((data) => {
      res.status(500).send(data);
    })
    .catch((err) => {
      console.log(">> Error while retrieving news: ", err);
    });
};
exports.getNewsWithCategoryName = (req,res) => {
  const name = req.params.name;
  return News.findAll({
    include: [
      {
        model: Categorys,
        as: "categories",
        attributes: ["id", "name"],
        through: {
          attributes: [],
        },
        where: {
          name: { [Op.iLike] : name }
        }
      },
    ],
  })
    .then((data) => {
      res.status(500).send(data);
    })
    .catch((err) => {
      console.log(">> Error while retrieving news: ", err);
    });
};
