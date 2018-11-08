import { query as queryDB } from '../database/db';

const courseRead = async (req, res) => {
  const { query } = req.body
  console.log(query, bla)
  const s = `SELECT * from academic_course WHERE ${query} `;
  try {
    const docs = await queryDB(s);
    // console.log(docs);
    res.json({ s, docs });
  } catch (err) {
    res.json({ s, err, msg: '😨 oh no!!!' });
  }
}

const courseCreate = async (req, res) => {
  const { params } = req.body;
  console.log(params)
  const joParams = JSON.parse(params)
  // console.log(JSON.parse(params)['a'])
  // console.log(JSON.parse(joParams))
  const s = `INSERT INTO academic_course (${Object.keys(joParams).join(', ')}) VALUES (${Object.values(joParams).join(', ')})`;
  console.log(s)
  try {
    const docs = await queryDB(s);
    res.json(s);
  } catch (err) {
    res.json(err);
  }
}

const courseUpdate = async (req, res) => {
  const { query, params } = req.body
  console.log(query, params)
    const s = `UPDATE academic_course SET ${params} WHERE ${query}`;
  try {
    const docs = await queryDB(s);
    res.json(s);
  } catch (err) {
    res.json(err);
  }
}

const courseDelete = async (req, res) => {
  const { query}=req.body
  console.log(query)
  const s= `DELETE from academic_course where ${query}`;
  try{
    const docs=await queryDB(s)
    res.json(s);
  }
  catch(err){
    res.json(err);
  }
}

export { courseRead, courseCreate, courseUpdate, courseDelete }
