import { User } from '../database/models';
import * as crypto from 'crypto';
import {sign as signToken, verify as verifyToken } from 'jsonwebtoken';
import { query as queryDb } from '../database/db';

const oauthPing = async (req, res) => {
    res.send({ message: 'it works' });
};
/**
 * 
 * @param req has body which has cilentId, username and password
 * @param res will send callbackurl and token
 */
const oauthLogin = async (req, res) => {
    console.log('Oauth Login Request')
    if ( req.body.type === 'student') {
        let s = `select Id from student where Student_Email="${req.body.username}" and Student_Password=md5("${req.body.password}")`;
        console.log(s);
        // TODO authentication
        const user = await queryDb(s);
        console.log(user);
        // DONE find the callback url using clientId
        const doc = await User.findById(req.body.clientId);
        // DONE create token using clientsecret + salt
        // TODO Put payload in token
        console.log(user[0]);
        const token = signToken({
                id : user[0].Id,
                // scope
            }, doc.clientSecret, { expiresIn: 60*60*24*30 });
        res.send({
            callbackurl: doc.callback,
            token: token
        });
    } else if (req.body.type === 'teacher') {

    } else if (req.body.type === 'employee') {

    }
};

const getDetails = async (req, res) => {
    const token = req.body.token;
    // const user = await User.findById(req.body.id);
    // if (user == null) res.send({error: 'UserId not present'});
    let decoded;
    try {
        decoded = verifyToken(req.body.token, req.body.secret);

        // TODO find row by id in token and return the scope
        const student = await queryDb(`select * from student where Id=${decoded.id}`)
        delete student[0]['Student_Password'];
        res.send({student});
    } catch(e) {
        res.send(e)
    }
}

const oauthCreate = async (req, res) => {
    const user = new User({
        email: req.body.email,
        group: req.body.group,
        callback: req.body.callback
    });
    user.save().then(
        doc => {
            // console.log(doc);
            console.log(doc.id);
            User.findByIdAndUpdate(doc.id, {$set: { clientSecret: crypto.pbkdf2Sync(doc.id, doc.email,  
                1000, 64, `sha512`).toString(`hex`) }}, {new: true}).then(
                    doc => res.send(doc),
                    err => res.send(err) 
                )
        },
        err => res.send(err)
    );
}

const query = async (req, res) => {
    console.log(req.body.query);
    queryDb(req.body.query).then(
      (docs) => {
        res.send(docs)
      },
      (err) => {
        res.send(err)
      }
    )
  }

export { oauthPing, oauthLogin, oauthCreate, getDetails, query };