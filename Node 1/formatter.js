module.exports = {
  moneyFormat: function (money) {
    return `Rp ${money.toFixed(2)}`;
  },
  dateFormat: function (date) {
    return date.toDateString();
  },
};
