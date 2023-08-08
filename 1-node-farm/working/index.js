import path from "path";
import fs from "fs";
import http from "http";
import url from "url";

import slugify from "slugify";

import replaceProductTags from "./modules/replaceProductTags.js";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

///////////////////////////////////////////////////////////////////////////////
// HTTP server

const overviewTemplate = fs.readFileSync(
  `${__dirname}/templates/overview.html`,
  "utf-8"
);
const cardTemplate = fs.readFileSync(
  `${__dirname}/templates/card.html`,
  "utf-8"
);
const productTemplate = fs.readFileSync(
  `${__dirname}/templates/product.html`,
  "utf-8"
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const productList = JSON.parse(data);

const slugs = productList.map((product) =>
  slugify(product.productName, { lower: true })
);
console.log(slugs);

const server = http.createServer((request, response) => {
  const { query, pathname } = url.parse(request.url, true);

  switch (pathname) {
    case "/":
    case "/overview":
      response.writeHead(200, { "Content-Type": "text/html" });
      const cardsHtml = productList
        .map((product) => replaceProductTags(cardTemplate, product))
        .join("");
      const overviewHtml = overviewTemplate.replace(
        "{%PRODUCT_CARDS%}",
        cardsHtml
      );
      response.end(overviewHtml);
      break;
    case "/product":
      response.writeHead(200, { "Content-Type": "text/html" });
      const product = productList[query.id];
      const productHtml = replaceProductTags(productTemplate, product);
      response.end(productHtml);
      break;
    case "/api":
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(data);
      break;
      response.writeHead(404, { "Content-Type": "text/html" });
      response.end("Page not found.");
    default:
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000.");
});

///////////////////////////////////////////////////////////////////////////////
// File IO
/*
const fileName1 = "./txt/start.txt";
fs.readFile(fileName1, "utf-8", (error, data1) => {
  console.log(data1);

  const fileName2 = `./txt/${data1}.txt`;
  fs.readFile(fileName2, "utf-8", (error, data2) => {
    console.log(data2);

    const fileName3 = `./txt/append.txt`;
    fs.readFile(fileName3, "utf-8", (error, data3) => {
      console.log(data3);

      const fileName4 = `./txt/final.txt`;
      fs.writeFile(fileName4, `${data2}\n${data3}`, "utf-8", (error) =>
        console.log("Done.")
      );

      console.log(`Writing to file "${fileName4}"...`);
    });

    console.log(`Reading file "${fileName3}"...`);
  });

  console.log(`Reading file "${fileName2}"...`);
});

console.log(`Reading file "${fileName1}"...`);
*/
