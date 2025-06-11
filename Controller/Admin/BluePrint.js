const bluePrintModel = require("../../Module/Admin/BluePrint");

class BLUEPRINT {
  async registerBLUEPRINT(req, res) {
    try {
      let {
        blName,
        board,
        medium,
        className,
        SubClassName,
        subjects,
        Instructions,
        // Remembering,
        // NQRemembering,
        // MaskRemembering,
        // Understanding,
        // NQUnderstanding,
        // MaskUnderstanding,
        // Expression,
        // NQExpression,
        // MaskExpression,
        // Appreciation,
        // MaskAppreciation,
        // NQAppreciation,
        EasyParcentage,
        AverageParcentage,
        DifficultParcentage,
        Weightageofthecontent,
        TypesofQuestions,
        DurationOfExam,
        TotalMask,
        Easy,
        EasyMask,
        Average,
        AverageMask,
        Difficult,
        DifficultMask,
        TotalDifficultMask,
        Objective,
        AllChapter,
        objectives,
        QuestionSize,
        price,
        ExameName,
        studentPrice,
      } = req.body;

      let data = await bluePrintModel.create({
        blName,
        board,
        medium,
        className,
        SubClassName,
        subjects,
        Instructions,
        // Remembering,
        // NQRemembering,
        // MaskRemembering,
        // Understanding,
        // NQUnderstanding,
        // MaskUnderstanding,
        // Expression,
        // NQExpression,
        // MaskExpression,
        // Appreciation,
        // MaskAppreciation,
        // NQAppreciation,
        Weightageofthecontent,
        TypesofQuestions,
        DurationOfExam,
        TotalMask,
        Easy,
        EasyMask,
        Average,
        AverageMask,
        Difficult,
        DifficultMask,
        TotalDifficultMask,
        Objective,
        AllChapter,
        objectives,
        QuestionSize,
        price,
        studentPrice,
        ExameName,
        EasyParcentage,
        AverageParcentage,
        DifficultParcentage,
      });
      if (!data) return res.status(400).json({ error: "Something went wrong" });
      return res.status(200).json({ success: "Successfully added" });
    } catch (error) {
      console.log(error);
    }
  }

  async getAllBLUEPRINTs(req, res) {
    try {
      let data = await bluePrintModel.find({}).sort({ _id: -1 });
      return res.status(200).json({ success: data });
    } catch (error) {
      console.log(error);
    }
  }

  // get method
  async getblueprintsbyid(req, res) {
    try {
      const id = req.params.id;
      console.log(id);
      let data = await bluePrintModel.findById(id);
      if (!data) return res.status(400).json({ error: "Data not found" });
      return res.status(200).json({ success: data });
    } catch (error) {
      console.log(error);
    }
  }
  async updateBLUEPRINT(req, res) {
    try {
      let {
        id,
        blName,
        board,
        medium,
        className,
        SubClassName,
        subjects,
        Instructions,
        Remembering,
        NQRemembering,
        MaskRemembering,
        Understanding,
        NQUnderstanding,
        MaskUnderstanding,
        Expression,
        NQExpression,
        MaskExpression,
        Appreciation,
        MaskAppreciation,
        NQAppreciation,
        Weightageofthecontent,
        TypesofQuestions,
        DurationOfExam,
        TotalMask,
        Easy,
        EasyMask,
        Average,
        AverageMask,
        Difficult,
        DifficultMask,
        TotalDifficultMask,
        objectives,
        QuestionSize,

        Objective,
        AllChapter,
        ExameName,
        price,
        studentPrice,
        EasyParcentage,
        AverageParcentage,
        DifficultParcentage,
      } = req.body;
      let obj = { AllChapter };
      if (EasyParcentage) {
        obj["EasyParcentage"] = EasyParcentage;
      }
      if (AverageParcentage) {
        obj["AverageParcentage"] = AverageParcentage;
      }
      if (DifficultParcentage) {
        obj["DifficultParcentage"] = DifficultParcentage;
      }
      if (ExameName) {
        obj["ExameName"] = ExameName;
      }
      if (price) {
        obj["price"] = price;
      }
      if (studentPrice) {
        obj["studentPrice"] = studentPrice;
      }
      if (blName) {
        obj["blName"] = blName;
      }
      if (board) {
        obj["board"] = board;
      }
      if (medium) {
        obj["medium"] = medium;
      }
      if (className) {
        obj["className"] = className;
      }
      if (SubClassName) {
        obj["SubClassName"] = SubClassName;
      }
      if (subjects) {
        obj["subjects"] = subjects;
      }
      if (Instructions) {
        obj["Instructions"] = Instructions;
      }
      if (Remembering) {
        obj["Remembering"] = Remembering;
      }
      if (NQRemembering) {
        obj["NQRemembering"] = NQRemembering;
      }
      if (MaskRemembering) {
        obj["MaskRemembering"] = MaskRemembering;
      }
      if (Understanding) {
        obj["Understanding"] = Understanding;
      }
      if (NQUnderstanding) {
        obj["NQUnderstanding"] = NQUnderstanding;
      }
      if (MaskUnderstanding) {
        obj["MaskUnderstanding"] = MaskUnderstanding;
      }
      if (Expression) {
        obj["Expression"] = Expression;
      }
      if (NQExpression) {
        obj["NQExpression"] = NQExpression;
      }
      if (MaskExpression) {
        obj["MaskExpression"] = MaskExpression;
      }
      if (Appreciation) {
        obj["Appreciation"] = Appreciation;
      }
      if (MaskAppreciation) {
        obj["MaskAppreciation"] = MaskAppreciation;
      }
      if (NQAppreciation) {
        obj["NQAppreciation"] = NQAppreciation;
      }
      // if (ProseWeightage) {
      //   obj["ProseWeightage"] = ProseWeightage;
      // }
      // if (PoetryWeightage) {
      //   obj["PoetryWeightage"] = PoetryWeightage;
      // }
      // if (NonDetailedWeightage) {
      //   obj["NonDetailedWeightage"] = NonDetailedWeightage;
      // }
      // if (GrammerWeightage) {
      //   obj["GrammerWeightage"] = GrammerWeightage;
      // }
      // if (VocabularyWeightage) {
      //   obj["VocabularyWeightage"] = VocabularyWeightage;
      // }
      if (objectives) {
        obj["objectives"] = objectives;
      }
      if (Objective) {
        obj["Objective"] = Objective;
      }
      if (QuestionSize) {
        obj["QuestionSize"] = QuestionSize;
      }
      if (Weightageofthecontent) {
        obj["Weightageofthecontent"] = Weightageofthecontent;
      }
      if (TypesofQuestions) {
        obj["TypesofQuestions"] = TypesofQuestions;
      }
      if (DurationOfExam) {
        obj["DurationOfExam"] = DurationOfExam;
      }
      if (TotalMask) {
        obj["TotalMask"] = TotalMask;
      }
      if (Easy) {
        obj["Easy"] = Easy;
      }
      if (EasyMask) {
        obj["EasyMask"] = EasyMask;
      }
      if (Average) {
        obj["Average"] = Average;
      }
      if (AverageMask) {
        obj["AverageMask"] = AverageMask;
      }
      if (Difficult) {
        obj["Difficult"] = Difficult;
      }
      if (DifficultMask) {
        obj["DifficultMask"] = DifficultMask;
      }
      if (TotalDifficultMask) {
        obj["TotalDifficultMask"] = TotalDifficultMask;
      }

      //   if (req.files.length != 0) {
      //     let arr = req.files;
      //     let i;
      //     for (i = 0; i < arr.length; i++) {
      //       if (arr[i].fieldname == "Profile") {
      //         obj["Profile"] = arr[i].filename;
      //       }
      //     }
      //   }
console.log(obj);
      let data = await bluePrintModel.findOneAndUpdate(
        { _id: id },
        { $set: obj },
        { new: true }
      );
      if (!data) return res.status(400).json({ error: "Data not found" });
      return res
        .status(200)
        .json({ success: data, msg: "Successfully Updated" });
    } catch (error) {
      console.log(error);
    }
  }
  async updateweigtage(req, res) {
    try {
      const weightageid = req.params.id;
      let { blueprintId, labels, Marks } = req.body;

      // console.log("aoo", weightageid, blueprintId);
      const blueprint = await bluePrintModel.findById(blueprintId);
      if (!blueprint) {
        return res.status(400).json({ error: "blueprint id not found" });
      }
      const weightage = blueprint.Weightageofthecontent.id(weightageid);

      if (!weightage) {
        return res.status(400).json({ error: "weightage id not found" });
      }
      if (labels) {
        weightage.labels = labels;
      }
      if (Marks) {
        weightage.Marks = Marks;
      }

      const updatedweighated = await blueprint.save();

      return res.status(200).json({ success: "heloo" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: "error" });
    }
  }

  async updatemarksdetails(req, res) {
    try {
      const marksdetailsid = req.params.id;
      let { marksId, QAType, NQA, Mask } = req.body;

      const marksDetails = await bluePrintModel.findById(marksId);
      if (!marksDetails) {
        return res.status(400).json({ errr: "blurprint is not found" });
      }
      const marksDetail = marksDetails.TypesofQuestions.id(marksdetailsid);

      if (!marksDetail) {
        return res.status(400).json({ error: "marlsDetailsId is not found" });
      }
      if (QAType) {
        marksDetail.QAType = QAType;
      }
      if (NQA) {
        marksDetail.NQA = NQA;
      }
      if (Mask) {
        marksDetail.Mask = Mask;
      }

      const updatesmarksdetaisl = await marksDetails.save();

      return res.status(200).json({ success: "Updated Succesfully" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: "Data not found" });
    }
  }

  async makeBlockAndUnblockBLUEPRINTs(req, res) {
    try {
      let { id, isBlock } = req.body;
      let data = await bluePrintModel.findOneAndUpdate(
        { _id: id },
        { $set: { isBlock: isBlock } },
        { new: true }
      );
      if (!data) return res.status(400).json({ error: "Something went wrong" });
      return res.status(200).json({
        success: `Successfully ${
          data?.isBlock == true ? "Approved" : "Holded"
        }`,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getAllBluePrintByClass(req, res) {
    try {
      let className = req.params.class;
      let data = await bluePrintModel
        .find({ className: className, isBlock: true })
        .sort({ _id: -1 });
      return res.status(200).json({ success: data });
    } catch (error) {
      console.log(error);
    }
  }

  async deleteBLUEPRINT(req, res) {
    try {
      let id = req.params.id;
      let data = await bluePrintModel.deleteOne({ _id: id });
      if (data.deletedCount == 0)
        return res.status(400).json({ error: "Data not found" });
      return res.status(200).json({ success: "Sucessfully deleted" });
    } catch (error) {
      console.log(error);
    }
  }

  async getBluePrintGetByTeacherRequired(req, res) {
    try {
      let { board, medium, className, SubClassName, subjects, ExameName } =
        req.body;
      let obj = { isBlock: true };
      if (board) {
        obj["board"] = board;
      }
      if (medium) {
        obj["medium"] = medium;
      }
      if (className) {
        obj["className"] = className;
      }
      if (SubClassName) {
        obj["SubClassName"] = SubClassName;
      }
      if (subjects) {
        obj["subjects"] = subjects;
      }
      // if(ExameName){
      //   obj["ExameName"]=ExameName;
      // }
      console.log(obj);

      let data = await bluePrintModel.find(obj).sort({ _id: -1 });
      if (data.length == 0)
        return res.status(400).json({ error: "Comming Soon" });
      return res.status(200).json({ success: data });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new BLUEPRINT();
