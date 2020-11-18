// Dokumentasi API atau Routes API
module.exports = app => {
    const categorys = require("../controllers/categorys.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Categorys
    router.post("/", categorys.create);
  
    // Retrieve all Categorys
    router.get("/", categorys.findAll);
  
    // Retrieve a single Categorys with id
    router.get("/id/:id", categorys.findOne);

  
    // Update a Categorys with id
    router.put("/id/:id", categorys.update);
  
    // Delete a Categorys with id
    router.delete("/id/:id", categorys.delete);

    // Create news category
    // router.post("/newsCategory", categorys.addNewsCategory);

    router.post ("/newsCategory", async (req, res)=>{
      await categorys.addNewsCategory(req.body.categorysId,req.body.newsId);
      res.status(200).send();
  })

  router.get("/location", categorys.getLocationCategory);
  router.get("/culinary", categorys.getCulinaryCategory);
  
    app.use('/api/categorys', router);
  };