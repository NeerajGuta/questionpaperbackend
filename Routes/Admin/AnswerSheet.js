const express = require("express")
const router = express.Router()
const answerSheetController = require("../controller/Admin/AnswerSheetController.js")
const { isAuthenticated, authorizeRoles } = require("../../middleware/auth")

// Create a new answer sheet
router.post(
  "/answer-sheet",
  isAuthenticated,
  authorizeRoles("admin", "teacher"),
  answerSheetController.createAnswerSheet,
)

// Get all answer sheets
router.get(
  "/answer-sheets",
  isAuthenticated,
  authorizeRoles("admin", "teacher"),
  answerSheetController.getAllAnswerSheets,
)

// Get answer sheet by ID
router.get(
  "/answer-sheet/:id",
  isAuthenticated,
  authorizeRoles("admin", "teacher"),
  answerSheetController.getAnswerSheetById,
)

// Update answer sheet
// router.put(
//   "/answer-sheet/:id",
//   isAuthenticated,
//   authorizeRoles("admin", "teacher"),
//   answerSheetController.updateAnswerSheet,
// )

// Delete answer sheet
router.delete(
  "/answer-sheet/:id",
  isAuthenticated,
  authorizeRoles("admin", "teacher"),
  answerSheetController.deleteAnswerSheet,
)

// Update student data in answer sheet
router.patch(
  "/answer-sheet/:id/student",
  isAuthenticated,
  authorizeRoles("admin", "teacher"),
  answerSheetController.updateStudentData,
)

// Calculate and update student scores
router.post(
  "/answer-sheet/:id/calculate-scores",
  isAuthenticated,
  authorizeRoles("admin", "teacher"),
  answerSheetController.calculateScores,
)

module.exports = router

