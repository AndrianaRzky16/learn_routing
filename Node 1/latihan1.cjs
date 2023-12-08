const CLITable3 = require("cli-table3");
const fs = require("fs");

fs.readFileSync("./books.json", "utf8", (err, data) => {
  if (err) throw err;

  const books = JSON.parse(data);

  const table = new CLITable3({
    head: ["No", "Judul", "Penulis", "Tahun Terbit", "Penerbit"],
  });

  books.buku.forEach((book, index) => {
    table.push([
      index + 1,
      book.judul,
      book.penulis,
      book.tahun_terbit,
      book.penerbit,
    ]);
  });
  console.log(table.toString());
});
