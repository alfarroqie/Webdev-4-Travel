// Dokumentasi API atau Routes API
module.exports = app => {
    const news = require("../controllers/news.controller.js");
  
    var router = require("express").Router();
  
    // Create a new news
    router.post("/", news.create);
  
    // Retrieve all News
    router.get("/", news.findAll);
  
    // Retrieve a single News with id
    router.get("/id/:id", news.findOne);
  
    // Update a News with id
    router.put("/id/:id", news.update);
  
    // Delete a News with id
    router.delete("/:id", news.delete);

    //Get News with category
     router.get("/category", news.getNewsWithCategory);

    //add category
    router.post("/category", news.addNewsCategory);

    // get newest news
    router.get("/newest", news.getNewestNews);

    // Retrieve 3 Newest News
    router.get("/newestNews", news.findNewest);
  
    app.use('/api/news', router);
  };