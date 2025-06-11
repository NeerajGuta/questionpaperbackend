const mongoose = require("mongoose")

const answerSheetSchema = new mongoose.Schema(
  {
    headerData: {
      lessonName: { type: String, default: "ಪಾಠದ ಹೆಸರು:-" },
      taluk: { type: String, default: "ತಾಲ್ಲೂಕು:-" },
      district: { type: String, default: "ಜಿಲ್ಲೆ:-" },
      title: { type: String, default: "ಶಿ ್ಷಕರ ಸಿ.ಆರ್.ಸಿ ಚಟುವಟಿಕೆ ಆಧಾ�ಿ  ಪ್ ಶ್�ೆಕೆ ಅಂಕपಟ್ ಿ 2024-25" },
      subject: { type: String, default: "ವಿಷಯ:- ಕನ್ನಡ(ಪ್ ಥಮ)" },
      grade: { type: String, default: "ರಗತಿ: 1" },
      teacherName: { type: String, default: "ನಿಯಮ ಶಿ ್ಷಕರ ಹೆಸರು:-" },
    },
    students: [
      {
        studentId: { type: Number, required: true },   
        studentName: { type: String, default: "" },
        scores: [{ type: String, default: "" }],
        rollno:{type:Number,default:0},
        totalScore: { type: Number, default: 0 },
        percentage: { type: Number, default: 0 },
        rank: { type: Number, default: 0 },
        grade: { type: String, default: "" },
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
      required: true,
    },
    classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CLASS",
      required: true,
    },
    subjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    },
    academicYear: {
      type: String,
      default: "2024-25",
    },
    examType: {
      type: String,
      enum: ["ಪರಿಮಾಣಾತ್ಮಕ ಮೌಲ್ಮಾನ 1", "ಪರಿಮಾಣಾತ್ಮಕ ಮೌಲ್ಮಾನ 2", "ವಾರ್ಷಿಕ ಪರೀಕ್ಷೆ"],
      required: true,
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model("AnswerSheet", answerSheetSchema)

