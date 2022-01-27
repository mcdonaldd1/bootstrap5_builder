const http = require('http');
const fs = require('fs');
const prot = `http://`;
const host = `localhost`;
const port = 8000;


// START REQUESTS (one for each page)
const server = http.createServer(function (req, res) {
  if (req.url == '/') {
    //
  }

  let index = __dirname + `/dist/my_starter.html`
  let f1 = fs.readFile(index, function (error, data) {
  if (error) {
    res.writeHead(404);
    res.write('Error loading page');
  } else {
    res.writeHead(200, {
     "Content-Type": "text/html"
    })
    res.write(data);
  }
    res.end();
  });



  // END REQUESTS
  console.log('Request received for: ' + req.url);
})

// START SERVER LISTENING
server.listen(port, function (error) {
  if (error) {
    console.log("SERVER ERROR: " + error);
  } else {
    console.log(`Server started at ${prot}${host}:${port} ... Ctl-C to exit...`);
  }
});
