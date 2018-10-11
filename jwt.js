const jwt = require('jsonwebtoken');

// console.log(jwt.sign({
//     hi: "hi"
// }, 'key', { expiresIn: 1 }))

// var decoded;
// try {
//     let decoded = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoaSI6ImhpIiwiaWF0IjoxNTM4NzE2OTk5LCJleHAiOjE1Mzg3MTcwMDB9._ksh13FENU8GKzNI9-tSbJlewMuTA19np7Z5JdEHTnE", 'key1');
//     // User.findById(decoded.id).then(
//     //     (doc) => {
//     //         res.send({
//     //             subs: doc.submissions
//     //         })
//     //     },
//     //     err => {}
//     // )
//     console.log('successfully decoded')
// } catch (e) {
//     console.log(e.name);
// }

console.log(jwt.sign({
    user: "ProjectA08"
}, 'qazwsxedc'))