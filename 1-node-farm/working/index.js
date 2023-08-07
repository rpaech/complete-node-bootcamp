import fs from "fs";
import http from "http";

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
// HTTP
