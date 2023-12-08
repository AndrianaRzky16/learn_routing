const { format, addDays } = require("date-fns");

const today = new Date();
const tomorrow = addDays(today, 1);

const formattedToday = format(today, "dd/MM/yyyy");
const formattedTomorrow = format(tomorrow, "dd/MM/yyyy");

console.log(`Hari Ini: ${formattedToday}`);
console.log(`Besok: ${formattedTomorrow}`);

//
