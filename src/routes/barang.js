 const express = require("express");
 const router = express.Router();
 
var path = require("path");
var scriptName = path.basename(__filename);
const filename = scriptName.split(".");
const controller = require("../controller/" + filename[0] + "_controller");
 const { checkRequest, requiredRequest } = require("../utils");

 router.post(
    "/create",
    controller.create
 );

 router.get(
    "/getByStatusAll/",
    controller.getByStatusAll                                                                                                                 
 );

router.get(
    "/getById/:guid",
    controller.getById
);

router.put(
    "/:guid",
    controller.updateOne
);

router.delete(
    "/:id",
    controller.deleteOne
);

module.exports = router;