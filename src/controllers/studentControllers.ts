import { query as queryDb } from '../database/db';

const studentIndex = async (req, res) => {
  /* queries => 
                "Id", "Student_Id", 
                "Student_First_Name", "Student_Middle_Name", "Student_Last_name",
                "Student_DOB", "Student_Gender", "Student_Email", "Student_Mobile",
                "Student_Blood_Group", "Student_Mother_Tongue", "Student_Registered_Year",
                "Student_Registered_Degree", "Student_Registered_Degree_Duration",
                "Student_Cur_YearofStudy", "Student_Cur_Sem", "Student_Academic_Status",
                "is_blacklisted", "Student_Image", "is_Alumini", "Student_Password"
  */
 /*
 { query: value,
   params: [ v1, v2, v3, ... ]
 }
 */
const { query, params } = req.body;
// res.send({query, params})
const s = `SELECT ${params} FROM student WHERE ${query}`;
const s1 = `SELECT Id FROM student WHERE Student_Id=20160010007`
console.log(s, s === s1)
queryDb(s).then(
  (docs) => {
    res.send(docs)
  },
  (err) => {
    res.send(err)
  }
)
  // try {
  //   const docs = await queryDb(s);
  //   console.log(docs);
  //   res.json({s});
  // } catch(err) {
  //   res.json({ s, err, msg: '😨 oh no!!!' });
  // }
};

// const studentUpdate = async (req, res) => {

// };

const educationHistory = async (req, res) => {
  try {
    const docs = await queryDb(req.body.query);
    res.json({data: docs});
  } catch (err) {
    res.json(err);
  }
};

const parent = async (req, res) => {
  try {
    const s1 = `SELECT Student_First_Name, Student_Middle_Name, Student_Last_name FROM student WHERE Student_Id=20160010007`
    const docs = await queryDb(s1);
    res.json({docs, q: req.body.query});
  } catch (err) {
    res.json(err);
  }
  // const { query, params } = req.body;
  // // res.send({query, params})
  // const s = `SELECT ${params} FROM student WHERE ${query}`;
  // const s1 = `SELECT Student_First_Name, Student_Middle_Name, Student_Last_name FROM student WHERE Student_Id=20160010007`
  // console.log(s, s === s1)
  // try {
  //   const docs = await queryDb(s1);
  //   console.log(docs);
  //   res.json({ s });
  // } catch (err) {
  //   res.json({ s, err, msg: '😨 oh no!!!' });
  // }
};

const semCourseReg = async (req, res) => {
  try {
    const docs = await queryDb(req.body.query);
    res.json(docs);
  } catch (err) {
    res.json(err);
  }
};

export { studentIndex, educationHistory, parent, semCourseReg };