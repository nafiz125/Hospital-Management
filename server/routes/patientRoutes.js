const express = require("express");
const {
  getPatients,
  createPatient,
  updatePatient,
  deletePatient,
} = require("../controllers/patientController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.use(protect);

router.get("/", getPatients);
router.post("/", createPatient);
router.put("/:id", updatePatient);
router.delete("/:id", deletePatient);

module.exports = router;