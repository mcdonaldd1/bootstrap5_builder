const express = require('express');
const app = express();
const prot = `http://`;
const host = `localhost`;
const port = 9090;
const root = '/dist';

app.use(express.static(__dirname + root));
app.listen(port);
console.log(`Express Server started at ${prot}${host}:${port} ... Ctl-C to exit...`);
