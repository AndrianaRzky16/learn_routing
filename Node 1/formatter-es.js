export function moneyFormat(money) {
  return `Rp ${money.toFixed(2)}`;
}

export function dateFormat(date) {
  return date.toDateString();
}
