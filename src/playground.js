const arr = [1, 2, 3, 4, 5];

let total = arr.reduce((sum, current, index) => {
  return sum + current;
}, 0);

console.log(total);

var today = Date.now();

// var month = today.getUTCMonth();
// var year = today.getUTCFullYear();

// console.log(`${month}${year}`)

const monthFormatter = new Intl.DateTimeFormat("en", { month: "2-digit" });
const yearFormatter = new Intl.DateTimeFormat("en", { year: "numeric" });
const month = monthFormatter.format(today);
const year = yearFormatter.format(today);
const period = year.toString() + month.toString();
console.log(`${period}`);

// var state= {
//     "categories": {
//       "salary": "{name: \"Salary\", type: \"Income\"}",
//       "rent": "{name: \"Rent\", type: \"Expense\"}",
//       "Internet": "{name: \"Internet\", type: \"expense\"}",
//       "Groceries": "{name: \"Groceries\", type: \"expense\"}",
//       "Medical Aid": "{name: \"Medical Aid\", type: \"expense\"}",
//       "Loan Installments": "{name: \"Loan Installments\", type: \"expense\"}"
//     },
//     "period": "202001",
//     "transactions": {
//       "202001": [
//         {
//           "amount": 4250,
//           "category": "Rent"
//         },
//         {
//           "amount": 358.5,
//           "category": "Internet"
//         },
//         {
//           "amount": 1000,
//           "category": "Groceries"
//         },
//         {
//           "amount": 325,
//           "category": "Medical Aid"
//         },
//         {
//           "amount": 191,
//           "category": "Loan Installments"
//         },
//         {
//           "amount": 400,
//           "category": "Loan Installments"
//         }
//       ]
//     }
//   }

//   var totalAmount = state.transactions[202001].filter(item => {
//       return item.category === "Rent"
//   })
//   .reduce((total, current) => {
//       return total + current.amount;
//   }, 0)

//   console.log(totalAmount)

var state = {
  transactions: {
    "202001": [
      {
        amount: 10000,
        category: "Salary"
      },
      {
        amount: 4250,
        category: "Rent"
      }
    ],
    "202002": [
      {
        amount: 12000,
        category: "Salary"
      },
      {
        amount: 5250,
        category: "Rent"
      }
    ]
  }
};

Object.keys(state.transactions)
  .map(period => state.transactions[period])
  .map(transactions => {
    console.log(typeof transactions);
  });

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
var date = "202001";
console.log(`${months[date.substring(4, 6)]} ${date.substring(0, 4)}`);

const df = {
  period: "202001",
  categories: {
    "": { name: "choose category", type: "" },
    salary: { name: "salary", type: "income" },
    rent: { name: "rent", type: "expense" }
  },
  transactions: {
    "202001": [
      { id: "FbKLyM7h", amount: 23, category: "salary" },
      {
        id: "YhLCH1hG",
        amount: 500,
        category: "salary",
        timestamp: 1580478133484
      },
      {
        id: "1qoPGwJx",
        amount: 509,
        category: "rent",
        timestamp: 1580478197059
      }
    ]
  }
};

const getBarData = () => {
  return [1, 2, 3, 4, 5].map(() => {
    return [
      { x: 1, y: Math.random() },
      { x: 2, y: Math.random() },
      { x: 3, y: Math.random() }
    ];
  });
};
console.log(getBarData());
