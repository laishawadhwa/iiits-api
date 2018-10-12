const express = require('express');
const path = require('path');
var PORT = process.env.PORT || 3000;
let app = express();
this.app.use(express.static(__dirname+"/client"))
this.app.get("/login/*", (req ,res) => {
    res.sendFile(path.join(__dirname+'/client','index.html'));
})
app.listen(PORT, () => {console.log(`Server is up on port ${PORT}`)});