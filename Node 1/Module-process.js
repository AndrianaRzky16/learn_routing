// //mengakses arumen baris perintah
// const args = process.argv;
// console.log("arguments baris Perintah:");
// console.log(args);

// //menghetikan proses perintah
// process.exit(0);

const greet = () => {
  const args = process.argv;
  if (args.length > 2) {
    console.log(`Hello ${args[2]}`);
  } else {
    console.log("Hello World, Node.js");
  }
};
greet();
process.exit(0);
