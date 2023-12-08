const fs = require("fs");

// Membaca Berkas

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Menulis Berkas

fs.writeFile("data.txt", "Hello World!", "utf8", (err) => {
  if (err) throw err;
  console.log("Berhasil Menulis File");
});

// List Berkas dan Directory

fs.readdir("./", (err, files) => {
  if (err) throw err;
  console.log(files);
});

// Menghapus Berkas

// fs.unlink("data.txt", (err) => {
//   if (err) throw err;
//   console.log("Berhasil Menghapus File");
// });
