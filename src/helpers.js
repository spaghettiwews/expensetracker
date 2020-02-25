import { defaultCategories } from "./siteConfig";

export function makePeriod() {
  const today = Date.now();
  const monthFormatter = new Intl.DateTimeFormat("en", { month: "2-digit" });
  const yearFormatter = new Intl.DateTimeFormat("en", { year: "numeric" });
  const month = monthFormatter.format(today);
  const year = yearFormatter.format(today);
  return year.toString() + month.toString();
}

export function getTextDate(period) {
  const months = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December"
  };
  return `${months[period.substring(4, 6)]} ${period.substring(0, 4)}`;
}

export const saveToLocal = function(name, value) {
  if (localStorage) {
    localStorage.setItem(name, JSON.stringify(value));
  }
};

export const getFromLocal = function(name) {
  if (localStorage && localStorage.getItem(name) !== null) {
    return JSON.parse(localStorage.getItem(name));
  } else {
    const categories = defaultCategories;
    const transactions = {};
    return { categories, transactions };
  }
};
