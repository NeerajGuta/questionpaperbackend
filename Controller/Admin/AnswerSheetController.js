const AnswerSheet = require("../models/AnswerSheet")
// const Teacher = require("../models/Teacher")
const CLASS = require("../models/CLASS")
const Subject = require("../models/Subject")

// Create a new answer sheet
exports.createAnswerSheet = async (req, res) => {
  try {
    const { headerData, students, classId, subjectId, examType } = req.body

    // Validate required fields
    if (!classId || !subjectId || !examType) {
      return res.status(400).json({
        status: false,
        message: "Class ID, Subject ID, and Exam Type are required",
      })
    }

    // Check if class exists
    const classExists = await CLASS.findById(classId)
    if (!classExists) {
      return res.status(404).json({
        status: false,
        message: "Class not found",
      })
    }

    // Check if subject exists
    const subjectExists = await Subject.findById(subjectId)
    if (!subjectExists) {
      return res.status(404).json({
        status: false,
        message: "Subject not found",
      })
    }

    // Create new answer sheet
    const newAnswerSheet = new AnswerSheet({
      headerData,
      students,
      createdBy: req.user._id, // Assuming user is attached to req by auth middleware
      classId,
      subjectId,
      examType,
    })

    await newAnswerSheet.save()

    return res.status(201).json({
      status: true,
      message: "Answer sheet created successfully",
      data: newAnswerSheet,
    })
  } catch (error) {
    console.error("Error creating answer sheet:", error)
    return res.status(500).json({
      status: false,
      message: "Internal server error",
      error: error.message,
    })
  }
}

// Get all answer sheets
exports.getAllAnswerSheets = async (req, res) => {
  try {
    const { classId, subjectId, examType } = req.query

    // Build filter object
    const filter = {}
    if (classId) filter.classId = classId
    if (subjectId) filter.subjectId = subjectId
    if (examType) filter.examType = examType

    // Add teacher filter if not admin
    if (req.user.role !== "admin") {
      filter.createdBy = req.user._id
    }

    const answerSheets = await AnswerSheet.find(filter)
      .populate("createdBy", "name email")
      .populate("classId", "name")
      .populate("subjectId", "name")
      .sort({ createdAt: -1 })

    return res.status(200).json({
      status: true,
      message: "Answer sheets retrieved successfully",
      count: answerSheets.length,
      data: answerSheets,
    })
  } catch (error) {
    console.error("Error fetching answer sheets:", error)
    return res.status(500).json({
      status: false,
      message: "Internal server error",
      error: error.message,
    })
  }
}

// Get answer sheet by ID
exports.getAnswerSheetById = async (req, res) => {
  try {
    const { id } = req.params

    const answerSheet = await AnswerSheet.findById(id)
      .populate("createdBy", "name email")
      .populate("classId", "name")
      .populate("subjectId", "name")

    if (!answerSheet) {
      return res.status(404).json({
        status: false,
        message: "Answer sheet not found",
      })
    }

    return res.status(200).json({
      status: true,
      message: "Answer sheet retrieved successfully",
      data: answerSheet,
    })
  } catch (error) {
    console.error("Error fetching answer sheet:", error)
    return res.status(500).json({
      status: false,
      message: "Internal server error",
      error: error.message,
    })
  }
}

// Update answer sheet
exports.updateAnswerSheet = async (req, res) => {
  try {
    const { id } = req.params
    const { headerData, students } = req.body

    const answerSheet = await AnswerSheet.findById(id)

    if (!answerSheet) {
      return res.status(404).json({
        status: false,
        message: "Answer sheet not found",
      })
    }

    // Check if user is authorized to update
    if (req.user.role !== "admin" && answerSheet.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        status: false,
        message: "You are not authorized to update this answer sheet",
      })
    }

    // Update fields
    if (headerData) answerSheet.headerData = headerData
    if (students) answerSheet.students = students

    await answerSheet.save()

    return res.status(200).json({
      status: true,
      message: "Answer sheet updated successfully",
      data: answerSheet,
    })
  } catch (error) {
    console.error("Error updating answer sheet:", error)
    return res.status(500).json({
      status: false,
      message: "Internal server error",
      error: error.message,
    })
  }
}

// Delete answer sheet
exports.deleteAnswerSheet = async (req, res) => {
  try {
    const { id } = req.params

    const answerSheet = await AnswerSheet.findById(id)

    if (!answerSheet) {
      return res.status(404).json({
        status: false,
        message: "Answer sheet not found",
      })
    }

    // Check if user is authorized to delete
    if (req.user.role !== "admin" && answerSheet.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        status: false,
        message: "You are not authorized to delete this answer sheet",
      })
    }

    await AnswerSheet.findByIdAndDelete(id)

    return res.status(200).json({
      status: true,
      message: "Answer sheet deleted successfully",
    })
  } catch (error) {
    console.error("Error deleting answer sheet:", error)
    return res.status(500).json({
      status: false,
      message: "Internal server error",
      error: error.message,
    })
  }
}

// Update student data in answer sheet
exports.updateStudentData = async (req, res) => {
  try {
    const { id } = req.params
    const { studentId, studentData } = req.body

    if (!studentId || !studentData) {
      return res.status(400).json({
        status: false,
        message: "Student ID and student data are required",
      })
    }

    const answerSheet = await AnswerSheet.findById(id)

    if (!answerSheet) {
      return res.status(404).json({
        status: false,
        message: "Answer sheet not found",
      })
    }

    // Check if user is authorized to update
    if (req.user.role !== "admin" && answerSheet.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        status: false,
        message: "You are not authorized to update this answer sheet",
      })
    }

    // Find student index
    const studentIndex = answerSheet.students.findIndex((student) => student.studentId === studentId)

    if (studentIndex === -1) {
      return res.status(404).json({
        status: false,
        message: "Student not found in answer sheet",
      })
    }

    // Update student data
    answerSheet.students[studentIndex] = {
      ...answerSheet.students[studentIndex],
      ...studentData,
    }

    await answerSheet.save()

    return res.status(200).json({
      status: true,
      message: "Student data updated successfully",
      data: answerSheet.students[studentIndex],
    })
  } catch (error) {
    console.error("Error updating student data:", error)
    return res.status(500).json({
      status: false,
      message: "Internal server error",
      error: error.message,
    })
  }
}

// Calculate and update student scores
exports.calculateScores = async (req, res) => {
  try {
    const { id     } = req.params

    const answerSheet = await AnswerSheet.findById(id)

    if (!answerSheet) {
      return res.status(404).json({
        status: false,
        message: "Answer sheet not found",
      })
    }

    // Check if user is authorized
    if (req.user.role !== "admin" && answerSheet.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        status: false,
        message: "You are not authorized to perform this action",
      })
    }

    // Calculate scores for each student
    answerSheet.students = answerSheet.students.map((student) => {
      // Calculate total score from numeric values in scores array
      const numericScores = student.scores.map((score) => Number.parseInt(score) || 0).filter((score) => !isNaN(score))

      const totalScore = numericScores.reduce((sum, score) => sum + score, 0)
      const percentage = Math.round((totalScore / 150) * 100) // Assuming max score is 150

      // Determine grade based on percentage
      let grade = ""
      if (percentage >= 90) grade = "A+"
      else if (percentage >= 80) grade = "A"
      else if (percentage >= 70) grade = "B+"
      else if (percentage >= 60) grade = "B"
      else if (percentage >= 50) grade = "C+"
      else if (percentage >= 40) grade = "C"
      else grade = "D"

      return {
        ...student,
        totalScore,
        percentage,
        grade,
      }
    })

    // Sort students by total score to determine rank
    const sortedStudents = [...answerSheet.students].sort((a, b) => b.totalScore - a.totalScore)

    // Assign ranks
    let currentRank = 1
    let prevScore = -1
    let sameRankCount = 0

    sortedStudents.forEach((student, index) => {
      if (student.totalScore !== prevScore) {
        currentRank = index + 1 - sameRankCount
        prevScore = student.totalScore
        sameRankCount = 0
      } else {
        sameRankCount++
      }
      student.rank = currentRank
    })

    // Update the answer sheet with sorted and ranked students
    answerSheet.students = sortedStudents
    await answerSheet.save()

    return res.status(200).json({
      status: true,
      message: "Scores calculated and updated successfully",
      data: answerSheet,
    })
  } catch (error) {
    console.error("Error calculating scores:", error)
    return res.status(500).json({
      status: false,
      message: "Internal server error",
      error: error.message,
    })
  }
}

