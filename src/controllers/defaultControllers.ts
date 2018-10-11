import { sign as signToken, verify as verifyToken } from 'jsonwebtoken';
import { query as queryDb } from '../database/db';

const defaultIndex = async (req, res) => {
  res.send({ message: 'it works' })
};

const getToken = async (req, res) => {
  /**
   * TODO DB queries. Smaple Code Below
   */
      // User.find({
      //   username: req.body.username
      // }).then(
      //   (docs) => {
      //       if (docs.length && docs[0].password === req.body.password) {
                // res.send({
                //     'x-auth': signToken({
                //         id: docs[0].id,
                //     }, 'adgjmptw')
      //           });
      //       } else {
      //           res.status(401).send("User not present");
      //       }
        // },
        // (err) => {
            // res.status(500).send("Server not responding");
        // }
    // );
  res.send({
    message: 'Data not present'
  });
}

const getData = async (req, res) => {
  /**
   * TODO DB queries. Smaple Code Below
   */
  console.log(req.body.scope);
  for (let i of req.body.scope) {
    console.log(i);
  }
  var decoded;
        try {
            let decoded = verifyToken(req.headers['x-auth'], 'adgjmptw');
            // User.findById(decoded.id).then(
            //     (doc) => {
            //         res.send({
            //             subs: doc.submissions
            //         })
            //     },
            //     err => {}
            // )
            res.send('successfully decoded')
        } catch (e) {
            res.status(401).send({
                error: "Unauthorized"
            });
        }
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
export { defaultIndex, getToken, getData, query };