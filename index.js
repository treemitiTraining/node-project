const express = require('express');
const app = express();
const port = 8000;

app.listen(port, function (err) {
    if (err) {
        console.log(`error in runnign in server', ${err}`);
    }
    console.log(`server is running on port: ${port}`);
})