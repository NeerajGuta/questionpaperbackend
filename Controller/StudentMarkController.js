const StudentMark = require('../models/StudentMark');

// Create a new student mark record
exports.createStudentMark = async (req, res) => {
  try {
    const {
      schoolName,
      taluk,
      district,
      teacherName,
      studentName,
      firstFormative,
      secondFormative,
      summativeOne,
      finalEvaluation
    } = req.body;

    // Create new student mark
    const studentMark = new StudentMark({
      schoolName,
      taluk,
      district,
      teacherName,
      studentName,
      firstFormative,
      secondFormative,
      summativeOne,
      finalEvaluation
    });

    // Save to database
    const savedStudentMark = await studentMark.save();
    
    res.status(201).json({
      success: true,
      data: savedStudentMark,
      message: 'Student mark record created successfully'
    });
  } catch (error) {
    console.error('Error creating student mark:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Server error'
    });
  }
};

// Get all student marks
exports.getAllStudentMarks = async (req, res) => {
  try {
    const studentMarks = await StudentMark.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: studentMarks.length,
      data: studentMarks
    });
  } catch (error) {
    console.error('Error fetching student marks:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Server error'
    });
  }
};

// Get a single student mark by ID
exports.getStudentMarkById = async (req, res) => {
  try {
    const studentMark = await StudentMark.findById(req.params.id);
    
    if (!studentMark) {
      return res.status(404).json({
        success: false,
        error: 'Student mark record not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: studentMark
    });
  } catch (error) {
    console.error('Error fetching student mark:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Server error'
    });
  }
};

// Update a student mark
exports.updateStudentMark = async (req, res) => {
  try {
    const studentMark = await StudentMark.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!studentMark) {
      return res.status(404).json({
        success: false,
        error: 'Student mark record not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: studentMark,
      message: 'Student mark record updated successfully'
    });
  } catch (error) {
    console.error('Error updating student mark:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Server error'
    });
  }
};

// Delete a student mark
exports.deleteStudentMark = async (req, res) => {
  try {
    const studentMark = await StudentMark.findByIdAndDelete(req.params.id);
    
    if (!studentMark) {
      return res.status(404).json({
        success: false,
        error: 'Student mark record not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Student mark record deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting student mark:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Server error'
    });
  }
};

// Get student marks by school
exports.getStudentMarksBySchool = async (req, res) => {
  try {
    const { schoolName } = req.params;
    
    const studentMarks = await StudentMark.find({ schoolName });
    
    res.status(200).json({
      success: true,
      count: studentMarks.length,
      data: studentMarks
    });
  } catch (error) {
    console.error('Error fetching student marks by school:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Server error'
    });
  }
};

// Get student marks by student name
exports.getStudentMarksByName = async (req, res) => {
  try {
    const { studentName } = req.params;
    
    const studentMarks = await StudentMark.find({ 
      studentName: { $regex: studentName, $options: 'i' } 
    });
    
    res.status(200).json({
      success: true,
      count: studentMarks.length,
      data: studentMarks
    });
  } catch (error) {
    console.error('Error fetching student marks by name:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Server error'
    });
  }
};