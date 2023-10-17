const path = require("path");
const fs = require("fs");
// console.log("Название файла:", path.basename(__filename));
// console.log("Название каталога:", path.dirname(__filename));
// console.log("расширение:", path.extname(__filename));

// fs.mkdir(path.join(__dirname, "tmp"), function (err) {
//   if (err) {
//     console.error(err);
//   }
//   console.log("папка создана");
// });

const filePath = path.join(__dirname, "tmp", "2.txt");
console.log(filePath);
fs.writeFile(filePath, "something wrong in your file", function (err) {
  if (err) {
    console.error(err);
  }
});
fs.appendFile(filePath, "\n something wrong in your file", function (err) {
  if (err) {
    console.error(err);
  }
});
fs.readFile(filePath, "UTF-8", (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data);
});
