const express = require("express");
const router = express.Router();
const controller = require("../controller/siswa_ctrl");
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
    
// router.get(
//     "/getByStatus/:status",
//     controller.getByStatus
// );

// router.get(
//     "/getCount",
//     controller.getCountBloodType
// );

router.put(
    "/:guid",
    controller.updateOne
);

// router.put(
//     "/updateStatus/:guid",
//     controller.updateStatus
// );

router.delete(
    "/:id",
    controller.deleteOne
);

module.exports = router;