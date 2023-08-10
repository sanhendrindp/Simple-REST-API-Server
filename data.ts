// ====================== Data for Financial Tracking =========================
interface Expense {
  category: string;
  date: string;
  amount: number;
}

export let expenses: Expense[] = [
  {
    category: "Food & Beverages",
    date: "2023-08-08",
    amount: 150000,
  },
  {
    category: "Transportation",
    date: "2023-08-07",
    amount: 50000,
  },
];
