const fs = require("fs");
const http = require("http");

// TITLE: Files

// NOTE: Blocking Synchonous Way
// const textIn = fs.readFileSync("./txt/input.txt", "utf8");
// console.log(textIn);
// const textOut = `This is what we know about the avocadosss: ${textIn}. \n Created on ${Date()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File Writtensss !!!");

// NOTE: Non Blocking async Way
// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   if (err) return console.log("👿 Error: ", err);
//   console.log(data);
//   fs.readFile(`./txt/${data}.txt`, "utf-8", (err2, data2) => {
//     console.log(data2);
//     fs.readFile(`./txt/append.txt`, "utf-8", (err3, data3) => {
//       console.log(data3);
//       fs.writeFile("./txt/final.txt", data2 + "\n DATA3 STARTS \n" + data3, "utf-8", (err) => {
//         console.log("Async File is Wriiten 😁");
//       });
//     });
//   });
// });

// LINE:

// TITLE: Server

const server = http.createServer((req, res) => {
  // NOTE: writing req data to json file
  //   fs.writeFile("./txt/req.txt", JSON.stringify(req, replacerFunc()), "utf-8", (err) => {
  //     console.log("file created 🍟🥨");
  //   });
  res.end("Hello from the server");
});

server.listen(8000, "localhost", () => {
  console.log("Listining to requests on port 8000");
});
// NOTE: functipn to convert circular object to json data
// const replacerFunc = () => {
//   const visited = new WeakSet();
//   return (key, value) => {
//     if (typeof value === "object" && value !== null) {
//       if (visited.has(value)) {
//         return;
//       }
//       visited.add(value);
//     }
//     return value;
//   };
// };
