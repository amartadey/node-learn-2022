const http = require("http");
const url = require("url");
const fs = require("fs");

// NOTE: Read json file only once (running synchronus file read because we are at top level code)
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObject = JSON.parse(data);

// NOTE: Read template data only once
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, "utf-8");
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, "utf-8");
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, "utf-8");

const server = http.createServer((req, res) => {
  console.log(req.url);
  const pathName = req.url;

  // NOTE: Overview Page
  if (pathName === "/" || pathName === "/overview") {
    res.end("this is the overview");

    // NOTE: Product Page
  } else if (pathName === "/product") {
    res.end("this is the product");

    // NOTE: API
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);

    // NOTE: Not Found
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello world",
    });
    res.end("<h1>Umm... Page Not Found....</h1>");
  }
});

server.listen(8000, "localhost", () => {
  console.log("Listining to requests on port 8000");
});
