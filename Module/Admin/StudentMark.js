const mongoose = require('mongoose');

// Define the schema for student assessment
const StudentMarkSchema = new mongoose.Schema({
  // School Information
  schoolName: {
    type: String,
    required: true
  },
  taluk: {
    type: String,
    required: true
  },
  district: {
    type: String,
    required: true
  },
  teacherName: {
    type: String,
    required: true
  },
  
  // Student Information
  studentName: {
    type: String,
    required: true
  },
  
  // First Formative Assessment
  firstFormative: {
    listeningAndSpeaking: {
      type: Number,
      default: 0
    },
    readingAndComprehension: {
      type: Number,
      default: 0
    },
    writingSkills: {
      type: Number,
      default: 0
    },
    grammar: {
      type: Number,
      default: 0
    },
    creativeExpression: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    }
  },
  
  // Second Formative Assessment
  secondFormative: {
    listeningAndSpeaking: {
      type: Number,
      default: 0
    },
    readingAndComprehension: {
      type: Number,
      default: 0
    },
    writingSkills: {
      type: Number,
      default: 0
    },
    grammar: {
      type: Number,
      default: 0
    },
    creativeExpression: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    }
  },
  
  // Summative Assessment
  summativeOne: {
    listeningAndSpeaking: {
      type: Number,
      default: 0
    },
    readingAndComprehension: {
      type: Number,
      default: 0
    },
    writingSkills: {
      type: Number,
      default: 0
    },
    grammar: {
      type: Number,
      default: 0
    },
    creativeExpression: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    }
  },
  
  // Final Evaluation
  finalEvaluation: {
    totalMarks: {
      type: Number,
      default: 0
    },
    percentage: {
      type: Number,
      default: 0
    },
    grade: {
      type: String,
      default: ''
    }
  },
  
  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Calculate totals before saving
StudentMarkSchema.pre('save', function(next) {
  // Calculate first formative total
  this.firstFormative.total = 
    Number(this.firstFormative.listeningAndSpeaking) +
    Number(this.firstFormative.readingAndComprehension) +
    Number(this.firstFormative.writingSkills) +
    Number(this.firstFormative.grammar) +
    Number(this.firstFormative.creativeExpression);
  
  // Calculate second formative total
  this.secondFormative.total = 
    Number(this.secondFormative.listeningAndSpeaking) +
    Number(this.secondFormative.readingAndComprehension) +
    Number(this.secondFormative.writingSkills) +
    Number(this.secondFormative.grammar) +
    Number(this.secondFormative.creativeExpression);
  
  // Calculate summative total
  this.summativeOne.total = 
    Number(this.summativeOne.listeningAndSpeaking) +
    Number(this.summativeOne.readingAndComprehension) +
    Number(this.summativeOne.writingSkills) +
    Number(this.summativeOne.grammar) +
    Number(this.summativeOne.creativeExpression);
  
  // Calculate final total and percentage
  const totalPossibleMarks = 150; // Adjust based on your grading system
  this.finalEvaluation.totalMarks = 
    this.firstFormative.total + 
    this.secondFormative.total + 
    this.summativeOne.total;
  
  this.finalEvaluation.percentage = 
    (this.finalEvaluation.totalMarks / totalPossibleMarks) * 100;
  
  // Calculate grade based on percentage
  if (this.finalEvaluation.percentage >= 90) {
    this.finalEvaluation.grade = 'A+';
  } else if (this.finalEvaluation.percentage >= 80) {
    this.finalEvaluation.grade = 'A';
  } else if (this.finalEvaluation.percentage >= 70) {
    this.finalEvaluation.grade = 'B+';
  } else if (this.finalEvaluation.percentage >= 60) {
    this.finalEvaluation.grade = 'B';
  } else if (this.finalEvaluation.percentage >= 50) {
    this.finalEvaluation.grade = 'C+';
  } else if (this.finalEvaluation.percentage >= 40) {
    this.finalEvaluation.grade = 'C';
  } else {
    this.finalEvaluation.grade = 'F';
  }
  
  // Update the timestamp
  this.updatedAt = Date.now();
  
  next();
});

module.exports = mongoose.model('StudentMark', StudentMarkSchema);