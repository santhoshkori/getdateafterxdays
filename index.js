const addDays = require("date-fns/addDays");
console.log(addDays);
let getdaysafter_x_days = (days) => {
  let my_date = addDays(new Date(22, 7, 2020), days);
  //DD-MM-YYYY
  return `${my_date.getDate()}-${my_date.getMonth()}-${my_date.getFullYear()}`;
};
module.exports = getdaysafter_x_days(2);
