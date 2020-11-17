const dbConfig = require("../configs/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.news = require("./news.model.js")(sequelize, Sequelize);
db.categorys = require("./categorys.model.js")(sequelize, Sequelize);
db.gallerys = require("./gallerys.model.js")(sequelize, Sequelize);
// db.roles = require("./roles.model.js")(sequelize, Sequelize);
db.users = require("./users.model.js")(sequelize, Sequelize);
db.weathers = require("./weathers.model.js")(sequelize, Sequelize);


//define relation
//many to many news and category
db.categorys.belongsToMany(db.news, {
  through: "newsCategory",
  as: "news",
  foreignKey: "news_id",
});
db.news.belongsToMany(db.categorys, {
  through: "newsCategory",
  as: "category",
  foreignKey: "category_id",
});

// one to many user and news 
db.users.hasMany(db.news, { as: "postNews" });
db.news.belongsTo(db.users, {
  foreignKey: "userId",
  as: "Post",
});

module.exports = db;



