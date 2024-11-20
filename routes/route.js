const express = require("express");
const router = express.Router();

// auth routes
const { register, login } = require("../controllers/auth");
const { checkAuthorizationHeaders, authorizeUser } = require("../middlewares/authenticate");


router.post("/register", register);
router.post("/login", checkAuthorizationHeaders, login);

    
// Studentinfo routes
const { createStudentinfo, updateStudentinfo, deleteStudentinfo, getStudentinfo, getAllStudentinfo } = require('../controllers/studentinfo');
// 
router.post("/studentinfo/create", checkAuthorizationHeaders,authorizeUser("createStudentinfo") ,createStudentinfo);
router.put("/studentinfo/update/:id", checkAuthorizationHeaders,authorizeUser("updateStudentinfo"), updateStudentinfo);
router.delete("/studentinfo/delete/:id", checkAuthorizationHeaders, authorizeUser("deleteStudentinfo"), deleteStudentinfo);
router.get("/studentinfo/get/:id", checkAuthorizationHeaders, authorizeUser("readStudentinfo"), getStudentinfo);
router.get("/studentinfo/getAll", checkAuthorizationHeaders, authorizeUser("readStudentinfo"), getAllStudentinfo);

  
module.exports = router;
