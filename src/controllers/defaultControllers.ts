import { sign as signToken, verify as verifyToken } from 'jsonwebtoken';

const defaultIndex = async (req, res) => {
  res.json({ message: 'it works' })
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
      //           res.send({
      //               'x-auth': signToken({
      //                   id: docs[0].id
      //               }, 'adgjmptw')
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
    'x-auth': signToken({id: 'srijanreddy98'}, 'adgjmptw')
  });
}

const login = async (req, res) => {
  /**
   * TODO DB queries. Smaple Code Below
   */
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
export { defaultIndex, getToken, login };