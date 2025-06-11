const QuestionPaperModel = require("../../Module/Admin/QuestionPaper");
const { removeImages } = require("../../RemoveFiles");

function shuffleArray(array,count,QusetionType) {
  let currentIndex = array.length,

    randomIndex;
    console.log("genrate=>",array.length,count);
if(currentIndex<=count){
  return array
}else
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array?.slice(0,count)
}

class QUESTION {
  async AddQuestionPaper(req, res) {
    try {
      let {
        orImage_Ans,
        OrPoemSat,
        OrPoemEnd,
        orNumberOfLine,
        input1,
        input2,
        input3,
        Question1,
        Answer1,
        orQuestion,
        orAnswer,
        ImageQ,
        orImageQ,
        Board,
        Medium,
        Lesson,
        Class,
        Sub_Class,
        Subject,
        Chapter_Name,
        Difficulty_level,
        Types_Question,
        Questiontype,
        Question_From,
        Section,
        Question,
        Option_1,
        Option_2,
        Option_3,
        Option_4,
        Name_of_examination,
        Objectives,
        Instruction,
        Marks,
        Answer_Time,
        Answer,
        NumberOfLine,
        ourQuestion,
        ourAnswer,
        Text_1,
        Text_2,
        Text_3,
        PoemSt,
        PoemEnd,
        RealetionA,
        RealetionB,
        RealetionC,
        Part_A1,
        Part_A2,
        Part_A3,
        Part_A4,
        Part_A5,
        Part_A6,
        Part_B1,
        Part_B2,
        Part_B3,
        Part_B4,
        Part_B5,
        Part_B6,
        Part_B7,
        Part_C1,
        Part_C2,
        Part_C3,
        Part_C4,
        Part_C5,
        Part_C6,
        Part_C7,
        Part_A1_A,
        Part_A2_A,
        Part_A3_A,
        Part_A4_A,
        Part_A5_A,
        Part_A6_A,
        Part_B1_A,
        Part_B2_A,
        Part_B3_A,
        Part_B4_A,
        Part_B5_A,
        Part_B6_A,
        Part_B7_A,
        Part_C1_A,
        Part_C2_A,
        Part_C3_A,
        Part_C4_A,
        Part_C5_A,
        Part_C6_A,
        Part_C7_A,
        PassiveQuesion,
        Option_5,
        Option_6,
        Option_7,
        viewPath,
        editPat,
        GrammerArrQ,
        GrammerArrAns,
        Types_QuestionTranslate,
      } = req.body;
      let obj = {
        orImage_Ans,
        OrPoemSat,
        OrPoemEnd,
        orNumberOfLine,
        input1,
        input2,
        input3,
        Question1,
        Answer1,
        orQuestion,
        orAnswer,
        ImageQ,
        orImageQ,

        Board,
        Medium,
        Class,
        Sub_Class,
        Lesson,
        Subject,
        Chapter_Name,
        Difficulty_level,
        Types_Question,
        Questiontype,
        Question_From,
        Section,
        Question,
        Option_1,
        Option_2,
        Option_3,
        Option_4,
        Name_of_examination,
        Objectives,
        Instruction,
        Marks,
        Answer_Time,
        Answer,
        NumberOfLine,
        ourQuestion,
        ourAnswer,
        Text_1,
        Text_2,
        Text_3,
        PoemSt,
        PoemEnd,
        RealetionA,
        RealetionB,
        RealetionC,
        Part_A1,
        Part_A2,
        Part_A3,
        Part_A4,
        Part_A5,
        Part_A6,
        Part_B1,
        Part_B2,
        Part_B3,
        Part_B4,
        Part_B5,
        Part_B6,
        Part_B7,
        Part_C1,
        Part_C2,
        Part_C3,
        Part_C4,
        Part_C5,
        Part_C6,
        Part_C7,
        Part_A1_A,
        Part_A2_A,
        Part_A3_A,
        Part_A4_A,
        Part_A5_A,
        Part_A6_A,
        Part_B1_A,
        Part_B2_A,
        Part_B3_A,
        Part_B4_A,
        Part_B5_A,
        Part_B6_A,
        Part_B7_A,
        Part_C1_A,
        Part_C2_A,
        Part_C3_A,
        Part_C4_A,
        Part_C5_A,
        Part_C6_A,
        Part_C7_A,
        PassiveQuesion,
        Option_5,
        Option_6,
        Option_7,
        viewPath,
        editPat,
        GrammerArrQ,
        GrammerArrAns,
        Types_QuestionTranslate,
      };

      if (req.files.length != 0) {
        let arr = req.files;
        let i;
        for (i = 0; i < arr.length; i++) {
          if (arr[i].fieldname == "orImage_Ans") {
            obj["orImage_Ans"] = arr[i].filename;
          }

          if (arr[i].fieldname == "ImageQ") {
            obj["ImageQ"] = arr[i].filename;
          }
          if (arr[i].fieldname == "orImageQ") {
            obj["orImageQ"] = arr[i].filename;
          }

          if (arr[i].fieldname == "Image") {
            obj["Image"] = arr[i].filename;
          }
          if (arr[i].fieldname == "ourImage") {
            obj["ourImage"] = arr[i].filename;
          }
          if (arr[i].fieldname == "Image_1") {
            obj["Image_1"] = arr[i].filename;
          }
          if (arr[i].fieldname == "Image_2") {
            obj["Image_2"] = arr[i].filename;
          }
          if (arr[i].fieldname == "Image_3") {
            obj["Image_3"] = arr[i].filename;
          }
          if (arr[i].fieldname == "Image_4") {
            obj["Image_4"] = arr[i].filename;
          }
          if (arr[i].fieldname == "Image_5") {
            obj["Image_5"] = arr[i].filename;
          }
          if (arr[i].fieldname == "Image_6") {
            obj["Image_6"] = arr[i].filename;
          }
          if (arr[i].fieldname == "Image_Ans") {
            obj["Image_Ans"] = arr[i].filename;
          }
        }
      }
      let data = await QuestionPaperModel.create(obj);
      console.log("data", data);
      if (!data) return res.status(400).json({ error: "Something went wrong" });
      return res.status(200).json({ success: "Successfully Added" });
    } catch (error) {
      console.log(error);
    }
  }

  async UpdateQuestionPaper(req, res) {
    try {
      let {
        orImage_Ans,

        input1,
        input2,
        input3,
        Questiontype,
        OrPoemSat,
        OrPoemEnd,
        orNumberOfLine,

        Question1,
        Answer1,
        orQuestion,
        orAnswer,
        ImageQ,
        orImageQ,

        id,
        Lesson,
        Board,
        Medium,
        Class,
        Sub_Class,
        Subject,
        Chapter_Name,
        Difficulty_level,
        Types_Question,
        Question_From,
        Section,
        Question,
        Option_1,
        Option_2,
        Option_3,
        Option_4,
        Name_of_examination,
        Objectives,
        Instruction,
        Marks,
        Answer_Time,
        Answer,
        NumberOfLine,
        ourQuestion,
        ourAnswer,
        Text_1,
        Text_2,
        Text_3,
        PoemSt,
        PoemEnd,
        RealetionA,
        RealetionB,
        RealetionC,
        Part_A1,
        Part_A2,
        Part_A3,
        Part_A4,
        Part_A5,
        Part_A6,
        Part_B1,
        Part_B2,
        Part_B3,
        Part_B4,
        Part_B5,
        Part_B6,
        Part_B7,
        Part_C1,
        Part_C2,
        Part_C3,
        Part_C4,
        Part_C5,
        Part_C6,
        Part_C7,
        Part_A1_A,
        Part_A2_A,
        Part_A3_A,
        Part_A4_A,
        Part_A5_A,
        Part_A6_A,
        Part_B1_A,
        Part_B2_A,
        Part_B3_A,
        Part_B4_A,
        Part_B5_A,
        Part_B6_A,
        Part_B7_A,
        Part_C1_A,
        Part_C2_A,
        Part_C3_A,
        Part_C4_A,
        Part_C5_A,
        Part_C6_A,
        Part_C7_A,
        PassiveQuesion,
        Option_5,
        Option_6,
        Option_7,
        GrammerArrQ,
        GrammerArrAns
      } = req.body;
      let obj = {};
      if (req.files.length != 0) {
        let arr = req.files;
        let i;
        for (i = 0; i < arr.length; i++) {
          if (arr[i].fieldname == "orImage_Ans") {
            obj["orImage_Ans"] = arr[i].filename;
          }

          if (arr[i].fieldname == "ImageQ") {
            obj["ImageQ"] = arr[i].filename;
          }
          if (arr[i].fieldname == "orImageQ") {
            obj["orImageQ"] = arr[i].filename;
          }

          if (arr[i].fieldname == "Image") {
            obj["Image"] = arr[i].filename;
          }
          if (arr[i].fieldname == "ourImage") {
            obj["ourImage"] = arr[i].filename;
          }
          if (arr[i].fieldname == "Image_1") {
            obj["Image_1"] = arr[i].filename;
          }
          if (arr[i].fieldname == "Image_2") {
            obj["Image_2"] = arr[i].filename;
          }
          if (arr[i].fieldname == "Image_3") {
            obj["Image_3"] = arr[i].filename;
          }
          if (arr[i].fieldname == "Image_4") {
            obj["Image_4"] = arr[i].filename;
          }
          if (arr[i].fieldname == "Image_5") {
            obj["Image_5"] = arr[i].filename;
          }
          if (arr[i].fieldname == "Image_6") {
            obj["Image_6"] = arr[i].filename;
          }
          if (arr[i].fieldname == "Image_Ans") {
            obj["Image_Ans"] = arr[i].filename;
          }
        }
      }

      if (Questiontype) {
        obj["Questiontype"] = Questiontype;
      }
      if (OrPoemSat) {
        obj["OrPoemSat"] = OrPoemSat;
      }
      if (OrPoemEnd) {
        obj["OrPoemEnd"] = OrPoemEnd;
      }
      if (orNumberOfLine) {
        obj["orNumberOfLine"] = orNumberOfLine;
      }
      if (input1) {
        obj["input1"] = input1;
      }
      if (input2) {
        obj["input2"] = input2;
      }
      if (input3) {
        obj["input3"] = input3;
      }
      if (Question1) {
        obj["Question1"] = Question1;
      }
      if (Answer1) {
        obj["Answer1"] = Answer1;
      }
      if (orQuestion) {
        obj["orQuestion"] = orQuestion;
      }
      if (orAnswer) {
        obj["orAnswer"] = orAnswer;
      }

      if (Board) {
        obj["Board"] = Board;
      }
      if (Medium) {
        obj["Medium"] = Medium;
      }
      if (Lesson) {
        obj["Lesson"] = Lesson;
      }
      if (Class) {
        obj["Class"] = Class;
      }
      if (Sub_Class) {
        obj["Sub_Class"] = Sub_Class;
      }
      if (Subject) {
        obj["Subject"] = Subject;
      }
      if (Chapter_Name) {
        obj["Chapter_Name"] = Chapter_Name;
      }
      if (Difficulty_level) {
        obj["Difficulty_level"] = Difficulty_level;
      }
      if (Types_Question) {
        obj["Types_Question"] = Types_Question;
      }
      if (Question_From) {
        obj["Question_From"] = Question_From;
      }
      if (Section) {
        obj["Section"] = Section;
      }
      if (Question) {
        obj["Question"] = Question;
      }
      if (Option_1) {
        obj["Option_1"] = Option_1;
      }
      if (Option_2) {
        obj["Option_2"] = Option_2;
      }
      if (Option_3) {
        obj["Option_3"] = Option_3;
      }
      if (Option_4) {
        obj["Option_4"] = Option_4;
      }
      if (Name_of_examination) {
        obj["Name_of_examination"] = Name_of_examination;
      }
      if (Objectives) {
        obj["Objectives"] = Objectives;
      }
      if (Instruction) {
        obj["Instruction"] = Instruction;
      }
      if (Marks) {
        obj["Marks"] = Marks;
      }
      if (Answer_Time) {
        obj["Answer_Time"] = Answer_Time;
      }
      if (NumberOfLine) {
        obj["NumberOfLine"] = NumberOfLine;
      }
      if (ourQuestion) {
        obj["ourQuestion"] = ourQuestion;
      }
      if (ourAnswer) {
        obj["ourAnswer"] = ourAnswer;
      }
      if (Text_1) {
        obj["Text_1"] = Text_1;
      }
      if (Text_2) {
        obj["Text_2"] = Text_2;
      }
      if (Text_3) {
        obj["Text_3"] = Text_3;
      }
      if (PoemSt) {
        obj["PoemSt"] = PoemSt;
      }
      if (PoemEnd) {
        obj["PoemEnd"] = PoemEnd;
      }
      if (RealetionA) {
        obj["RealetionA"] = RealetionA;
      }
      if (RealetionB) {
        obj["RealetionB"] = RealetionB;
      }
      if (RealetionC) {
        obj["RealetionC"] = RealetionC;
      }
      if (Part_A1) {
        obj["Part_A1"] = Part_A1;
      }
      if (Part_A2) {
        obj["Part_A2"] = Part_A2;
      }
      if (Part_A3) {
        obj["Part_A3"] = Part_A3;
      }
      if (Part_A4) {
        obj["Part_A4"] = Part_A4;
      }
      if (Part_A5) {
        obj["Part_A5"] = Part_A5;
      }
      if (Part_A6) {
        obj["Part_A6"] = Part_A6;
      }
      if (Part_B1) {
        obj["Part_B1"] = Part_B1;
      }
      if (Part_B2) {
        obj["Part_B2"] = Part_B2;
      }
      if (Part_B3) {
        obj["Part_B3"] = Part_B3;
      }
      if (Part_B5) {
        obj["Part_B5"] = Part_B5;
      }
      if (Part_B6) {
        obj["Part_B6"] = Part_B6;
      }
      if (Part_B7) {
        obj["Part_B7"] = Part_B7;
      }
      if (Part_C1) {
        obj["Part_C1"] = Part_C1;
      }
      if (Part_C2) {
        obj["Part_C2"] = Part_C2;
      }
      if (Part_C3) {
        obj["Part_C3"] = Part_C3;
      }
      if (Part_C5) {
        obj["Part_C5"] = Part_C5;
      }
      if (Part_C6) {
        obj["Part_C6"] = Part_C6;
      }
      if (Part_C7) {
        obj["Part_C7"] = Part_C7;
      }
      if (Part_A1_A) {
        obj["Part_A1_A"] = Part_A1_A;
      }
      if (Part_A2_A) {
        obj["Part_A2_A"] = Part_A2_A;
      }
      if (Part_A3_A) {
        obj["Part_A3_A"] = Part_A3_A;
      }
      if (Part_A4_A) {
        obj["Part_A4_A"] = Part_A4_A;
      }
      if (Part_A5_A) {
        obj["Part_A5_A"] = Part_A5_A;
      }
      if (Part_A6_A) {
        obj["Part_A6_A"] = Part_A6_A;
      }
      if (Part_B1_A) {
        obj["Part_B1_A"] = Part_B1_A;
      }
      if (Part_B2_A) {
        obj["Part_B2_A"] = Part_B2_A;
      }
      if (Part_B3_A) {
        obj["Part_B3_A"] = Part_B3_A;
      }
      if (Part_B4_A) {
        obj["Part_B4_A"] = Part_B4_A;
      }
      if (Part_B5_A) {
        obj["Part_B5_A"] = Part_B5_A;
      }
      if (Part_B6_A) {
        obj["Part_B6_A"] = Part_B6_A;
      }
      if (Part_B7_A) {
        obj["Part_B7_A"] = Part_B7_A;
      }
      if (Part_C1_A) {
        obj["Part_C1_A"] = Part_C1_A;
      }
      if (Part_C2_A) {
        obj["Part_C2_A"] = Part_C2_A;
      }
      if (Part_C3_A) {
        obj["Part_C3_A"] = Part_C3_A;
      }
      if (Part_C4_A) {
        obj["Part_C4_A"] = Part_C4_A;
      }
      if (Part_C5_A) {
        obj["Part_C5_A"] = Part_C5_A;
      }
      if (Part_C6_A) {
        obj["Part_C6_A"] = Part_C6_A;
      }
      if (Part_C7_A) {
        obj["Part_C7_A"] = Part_C7_A;
      }
      if (PassiveQuesion) {
        obj["PassiveQuesion"] = PassiveQuesion;
      }
      if (Option_5) {
        obj["Option_5"] = Option_5;
      }
      if (Option_6) {
        obj["Option_6"] = Option_6;
      }
      if (Option_7) {
        obj["Option_7"] = Option_7;
      }
      if (Answer) {
        obj["Answer"] = Answer;
      }
      if (Part_B4) {
        obj["Part_B4"] = Part_B4;
      }
      if (GrammerArrQ) {
        obj["GrammerArrQ"] = GrammerArrQ
      }

      if (GrammerArrAns) {
        obj["GrammerArrAns"] = GrammerArrAns
      }
      let data = await QuestionPaperModel.findOneAndUpdate(
        { _id: id },
        { $set: obj },
        { new: true }
      );
      if (!data) return res.status(400).json({ error: "Data not found" });
      return res.status(200).json({ success: "Successfully updated" });
    } catch (error) {
      console.log(error);
    }
  }

  async getAllQuestionUser(req, res) {
    try {
      let data = await QuestionPaperModel.find({ isBlock: false }).sort({
        _id: -1,
      });
      return res.status(200).json({ success: data });
    } catch (error) {
      console.log(error);
    }
  }

  async getAllQuestionByClassAdmin(req, res) {
    try {
      let className = req.params.class;
      let data = await QuestionPaperModel.find({ Class: className }).sort({
        _id: -1,
      });
      return res.status(200).json({ success: data });
    } catch (error) {
      console.log(error);
    }
  }

  async makeBlockAndUnBlockQuestions(req, res) {
    try {
      let { id, isBlock } = req.body;
      let data = await QuestionPaperModel.findOneAndUpdate(
        { _id: id },
        { $set: { isBlock: isBlock } },
        { new: true }
      );
      if (!data) return res.status(400).json({ error: "Data not found" });
      return res.status(200).json({
        success: `Successfully ${data.isBlock == true ? "Blocked" : "Un-Blocked"
          }`,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getAllQuestionAdmin(req, res) {
    try {
      let data = await QuestionPaperModel.find().sort({ _id: -1 });
      return res.status(200).json({ success: data });
    } catch (error) {
      console.log(error);
    }
  }

  async deleteQuestionPaper(req, res) {
    try {
      let id = req.params.id;
      let check = await QuestionPaperModel.findById(id);

      if (!check) return res.status(400).json({ error: "Data not found" });


      if (check.ImageQ) {
        removeImages('Public/Questions/' + check.ImageQ)
      }
      if (check.orImageQ) {
        removeImages('Public/Questions/' + check.orImageQ)
      }
      if (check.Image) {
        removeImages('Public/Questions/' + check.Image)
      }

      if (check.ourImage) {
        removeImages('Public/Questions/' + check.ourImage)
      }
      if (check.Image_1) {
        removeImages('Public/Questions/' + check.Image_1)
      }
      if (check.Image_2) {
        removeImages('Public/Questions/' + check.Image_2)
      }
      if (check.Image_3) {
        removeImages('Public/Questions/' + check.Image_3)
      }
      if (check.Image_4) {
        removeImages('Public/Questions/' + check.Image_4)
      }
      if (check.Image_Ans) {
        removeImages('Public/Questions/' + check.Image_Ans)
      }


      let data = await QuestionPaperModel.deleteOne({ _id: id });

      return res.status(200).json({ success: "Successfully deleted" });
    } catch (error) {
      console.log(error);
    }
  }

  async uploadMultipleQuestion(req, res) {
    try {
      let { Questions } = req.body;
      let data = await QuestionPaperModel.insertMany(Questions);
      if (data.length == 0)
        return res.status(400).json({ error: "Data not found" });
      return res.status(200).json({ success: "Successfully added" });
    } catch (error) {
      console.log(error);
    }
  }

  uploadImagesOuestion(req, res) {
    try {
      let file = req.files;
    } catch (error) {
      console.log(error);
    }
  }
  async getQuestionpaperadminbyid(req, res) {
    try {
      const id = req.params.id;
      let data = await QuestionPaperModel.findById({ _id: id });
      return res.status(200).json({ success: data });
    } catch (error) {
      console.log(error);
    }
  }

  async getQuestionByClasswise(req, res) {
    try {
      let { Board, Medium, Class, Sub_Class, Subject ,ExamName,AllChapter,QusetionType,Weightageofthecontent} = req.body;

  let ChapterData=  [...new Set(AllChapter?.map((ele)=>ele?.Blueprintchapter))];
  let ObjectiveData= [...new Set(AllChapter?.map((ele)=>ele?.Blueprintobjective))];
  let QueationTypeA= [...new Set(QusetionType?.map((ele)=>ele?.QAType))];
  let label= [...new Set(Weightageofthecontent?.map((ele)=>ele?.label))];
  // let am=state?.bluePrint?.AllChapter?.filter((ele)=> ele?.Blueprintobjective == data)?.reduce(
  //   (a, ele) => a + Number(ele?.Blueprintnoofquestion),
  //   0
  // )
    // Construct regex patterns for chapter and objective
    const chapterRegex = ChapterData ? new RegExp(ChapterData.join("|"), "i") : /.*/;
    const objectiveRegex = ObjectiveData ? new RegExp(ObjectiveData.join("|"), "i") : /.*/;
    const QA = QueationTypeA ? new RegExp(QueationTypeA.join("|"), "i") : /.*/;
    let lesson=label ? new RegExp(label.join("|"), "i") : /.*/;
  
// console.log("data check==>",ObjectiveData,ChapterData);

      let allQuestions = await QuestionPaperModel.find({
        Board: Board,
        Medium: Medium,
        Class: Class,
        Sub_Class: Sub_Class,
        Subject: Subject,
    
        // "Name_of_examination.NameExamination": { $in: ExamName } ,
        $or: [
          { "Chapter_Name": { $regex: chapterRegex } }, // Assuming the field name for chapter is "chapterField"
          { "Objectives": { $regex: objectiveRegex } }, // Assuming the field name for objective is "objectiveField"
          {"Types_Question":{ $regex: QA }},
          {"Lesson":{$regex: lesson }}

        ]
      });


      let am=[];
      // const shuffledQuestions = (allQuestions);
      if(allQuestions.length!==0){
        QusetionType?.map(  (n)=>{
      
       
          let arr=allQuestions?.filter((item)=>{
            // console.log("ObjectiveData.some((ele)=>ele==item.Objectives)",ChapterData.some((an)=>an==item?.Chapter_Name),item.Chapter_Name,item?.Types_Question);
          return  ObjectiveData.some((ele)=>ele==item.Objectives)&&ChapterData.some((an)=>an==item?.Chapter_Name)&&n?.QAType==item?.Types_Question})
            let ab=  shuffleArray(arr,n.NQA)
          // console.log("check=>",ab.length,n.QAType,n.NQA);
            am.push(...ab)
        })
      }
      
  //  console.log("ammm",am.length,am);
     
        return res.status(200).json({ success:am });       
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getQuestionByBluePrint(req, res) {
    try {
      let {
        Board,
        Medium,
        Class,
        Sub_Class,
        Subject,
        Lesson,
        Chapter_Name,
        Difficulty_level,
        Types_Question,
        Limit,
      } = req.body;

      let allQuestions = await QuestionPaperModel.find({
        Board: Board,
        Medium: Medium,
        Class: Class,
        Sub_Class: Sub_Class,
        Subject: Subject,
        Lesson: Lesson,
        Chapter_Name: Chapter_Name,
        Difficulty_level: Difficulty_level,
        Types_Question: Types_Question,
      }).sort({ count: 1 });


      // Shuffle the array of questions to get a random order
      const shuffledQuestions = shuffleArray(allQuestions);

      // Take the first 20 questions from the shuffled array
      const randomQuestions = shuffledQuestions.slice(0, Limit);
      res.status(200).json({ success: randomQuestions });
      randomQuestions.map(async (ele) => {
        await QuestionPaperModel.findOneAndUpdate(
          { _id: ele?._id },
          { $set: { count: ele?.count + 1, isRead: true } }
        );
      });
      return;
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = new QUESTION();
