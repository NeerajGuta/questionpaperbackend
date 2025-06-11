const express = require('express');
const router = express.Router();
const studentMarkController = require('../controllers/studentMarkController');

// Create a new student mark
router.post('/', studentMarkController.createStudentMark);

// Get all student marks
router.get('/', studentMarkController.getAllStudentMarks);

// Get a single student mark by ID
router.get('/:id', studentMarkController.getStudentMarkById);

// Update a student mark
router.put('/:id', studentMarkController.updateStudentMark);

// Delete a student mark
router.delete('/:id', studentMarkController.deleteStudentMark);

// Get student marks by school
router.get('/school/:schoolName', studentMarkController.getStudentMarksBySchool);

// Get student marks by student name
router.get('/student/:studentName', studentMarkController.getStudentMarksByName);

module.exports = router;