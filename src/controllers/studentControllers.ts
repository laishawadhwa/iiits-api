import { query } from '../database/db';

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
  try {
    const docs = await query(req.body.query);
    res.json(docs);
  } catch(err) {
    res.json(err);
  }
};

const educationHistory = async (req, res) => {
  try {
    const docs = await query(req.body.query);
    res.json(docs);
  } catch (err) {
    res.json(err);
  }
};

const parent = async (req, res) => {
  try {
    const docs = await query(req.body.query);
    res.json(docs);
  } catch (err) {
    res.json(err);
  }
};

const semCourseReg = async (req, res) => {
  try {
    const docs = await query(req.body.query);
    res.json(docs);
  } catch (err) {
    res.json(err);
  }
};

export { studentIndex, educationHistory, parent, semCourseReg };