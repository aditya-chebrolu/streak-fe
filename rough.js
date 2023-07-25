const { isBefore, differenceInDays, addDays } = require("date-fns");

const date = new Date();
const date2 = addDays(new Date(), 1);
console.log(">", differenceInDays(date2, date));
