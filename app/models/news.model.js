module.exports = (sequelize, Sequelize) => {
    const News = sequelize.define("news", {
      title: {
        type: Sequelize.STRING
      },
      publish: {
        type: Sequelize.DATE(6)
      },
      content: {
        type: Sequelize.TEXT
      },
      locationLink: {
        type: Sequelize.STRING
      },
      views: {
        type: Sequelize.INTEGER
      },
      pictLink: {
        type: Sequelize.STRING
      }
    });
  
    return News;
  };