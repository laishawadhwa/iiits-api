import { User } from '../database/models';
import * as crypto from 'crypto';
import {sign as signToken, verify as verifyToken } from 'jsonwebtoken';

const oauthPing = async (req, res) => {
    res.send({ message: 'it works' });
};
/**
 * 
 * @param req has body which has cilentId, username and password
 * @param res will send callbackurl and token
 */
const oauthLogin = async (req, res) => {
    // TODO authentication

    // DONE find the callback url using clientId
    const doc = await User.findById(req.body.clientId);
    // DONE create token using clientsecret + salt
    // TODO Put payload in token
    const token = signToken({
            // id,
            // scope
        }, doc.clientSecret, { expiresIn: 60*60*24*30 });
    res.send({
        callbackurl: doc.callback,
        token: token
    });
};

const getDetails = async (req, res) => {
    const token = req.body.token;
    const user = await User.findById(req.body.id);
    if (user == null) res.send({error: 'UserId not present'});
    let decoded;
    try {
        decoded = verifyToken(req.body.token, user.clientSecret);

        // TODO find row by id in token and return the scope


        res.send({});
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

export { oauthPing, oauthLogin, oauthCreate };