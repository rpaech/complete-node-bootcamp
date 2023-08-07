import path from "path";
import fs from "fs";
import http from "http";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
///////////////////////////////////////////////////////////////////////////////
// HTTP server

function replaceProductTags(template, product) {
  let output;
  output = template.replace(/{%ID%}/g, product.id);
  output = output.replace(/{%NAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(
    /{%NOT_ORGANIC%}/g,
    !product.organic ? "not-organic" : ""
  );
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  return output;
}

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

const server = http.createServer((request, response) => {
  const loc = request.url;

  if (loc === "/" || loc === "/overview") {
    response.writeHead(200, { "Content-Type": "text/html" });
    const cardsHtml = productList
      .map((product) => replaceProductTags(cardTemplate, product))
      .join("");
    const overviewHtml = overviewTemplate.replace(
      "{%PRODUCT_CARDS%}",
      cardsHtml
    );
    response.end(overviewHtml);
  } else if (loc === "/product") {
    response.end("Product");
  } else if (loc === "/api") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(data);
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end("Page not found.");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000.");
});
