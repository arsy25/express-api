const express = require("express");
const router = express.Router();
// const authController = require("../controller/auth_controller");
const { requestResponse } = require("../utils/index");
const siswa = require("./siswa");
const barang = require("./barang")
const buyer = require("./buyer")
const suadmin = require("./suadmin")

let response;

router.get(
  "/",
  (req, res) => {
    response = requestResponse.success;
    response.message = "SAMPLE - API!";
    res.status(response.code).json(response);
  }
);

// router.post(
//   "/user/login",
  // checkRequest(requiredRequest.admin_login),
//   authController.login
// );

router.use("/siswa", siswa);
router.use("/buyer", buyer);
router.use("/barang", barang);
router.use("/suadmin", suadmin);

module.exports = router;