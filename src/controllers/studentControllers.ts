import { query } from '../database/db';

const studentIndex = async (req, res) => {
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