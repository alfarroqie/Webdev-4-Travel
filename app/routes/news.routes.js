// Dokumentasi API atau Routes API
module.exports = app => {
    const news = require("../controllers/news.controller.js");
  
    var router = require("express").Router();
  
    // Create a new news
    router.post("/", news.create);
  
    // Retrieve all News
    router.get("/", news.findAll);
    
    // Retrieve 3 Newest News
    router.get("/News", news.findNewest);
  
    // Retrieve a single News with id
    router.get("/:id", news.findOne);
  
    // Update a News with id
    router.put("/:id", news.update);
  
    // Delete a News with id
    router.delete("/:id", news.delete);
    
    router.get("/NewestNews", news.getNewestNews);
  
    app.use('/api/news', router);
  };
