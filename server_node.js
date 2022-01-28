const http = require('http');
const fs = require('fs');
const url = require("url");
const prot = `http://`;
const host = `localhost`;
const port = 8523;


// START REQUESTS (one for each page)
const server = http.createServer(function (req, res) {
  let path = url.parse(req.url).pathname;
  console.log(`PATH: ${path}`);
  switch (path) {

    case '/':
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.write('<h1>Hello World</h1>');
      res.write(`<a href=\"${prot}${host}:${port}/bs5_cdn_starter\">CDN Starter page</a><br />`);
      res.write(`<a href=\"${prot}${host}:${port}/style_sheet_selector\">Style Sheet Selector tool</a>`);
      res.end();
      break;

    case '/style_sheet_selector':
      // my_selector.html page
      let p1 = __dirname + `/dist/my_style_sheet_selector.html`
      let f1 = fs.readFile(p1, function (error, data) {
        if (error) {
          res.writeHead(404);
          res.write('Error loading page');
        } else {
          res.writeHead(200, {
            "Content-Type": "text/html"
          })
          res.write(data);
          res.end();

        }
      });
      break; // end my_selector.html

    case '/bs5_cdn_starter':
      // bs5_cdn_starter.html page
      let p2 = __dirname + `/dist/bs5_cdn_starter.html`
      let f2 = fs.readFile(p2, function (error, data) {
        if (error) {
          res.writeHead(404);
          res.write('Error loading page');
        } else {
          res.writeHead(200, {
            "Content-Type": "text/html"
          })
          res.write(data);
          res.end();
        }
      });
      break; // end bs5_cdn_starter.html

    case '/api':
      // API
      res.setHeader("Content-type", "application/json");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.writeHead(200); //status code HTTP 200 / OK

      let dataObj = {
        id: 123,
        name: "Bob",
        email: "bob@work.org"
      };
      let data = JSON.stringify(dataObj);
      res.end(data);
      break; // end api
  };


  // END REQUESTS
  console.log('Request received for: ' + req.url);
})


// START SERVER LISTENING
server.listen(port, function (error) {
  if (error) {
    console.log("SERVER ERROR: " + error);
  } else {
    console.log(`Node.js server started at ${prot}${host}:${port} ... Ctl-C to exit...`);
  }
});
