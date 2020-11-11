// Dokumentasi API atau Roles API
module.exports = app => {
    const roles = require("../controllers/roles.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Roles
    router.post("/", roles.create);
  
    // Retrieve all Roles
    router.get("/", roles.findAll);
  
    // Retrieve a single Roles with id
    router.get("/:id", roles.findOne);
  
    // Update a ROles with id
    router.put("/:id", roles.update);
  
    // Delete a ROles with id
    router.delete("/:id", roles.delete);
  
    app.use('/api/roles', router);
  };