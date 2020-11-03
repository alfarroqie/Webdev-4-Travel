// Dokumentasi API atau Routes API
module.exports = app => {
    const categorys = require("../controllers/categorys.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Categorys
    router.post("/", categorys.create);
  
    // Retrieve all Categorys
    router.get("/", categorys.findAll);
  
    // Retrieve a single Categorys with id
    router.get("/:id", categorys.findOne);
  
    // Update a Categorys with id
    router.put("/:id", categorys.update);
  
    // Delete a Categorys with id
    router.delete("/:id", categorys.delete);
  
    app.use('/api/categorys', router);
  };