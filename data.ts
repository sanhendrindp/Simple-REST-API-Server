// ====================== Data for Financial Tracking =========================
export interface Expense {
  id: number;
  category: string;
  date: string;
  amount: number;
}

export let expenses: Expense[] = [
  {
    id: 1,
    category: "Food & Beverages",
    date: "2023-08-08",
    amount: 150000,
  },
  {
    id: 2,
    category: "Transportation",
    date: "2023-08-07",
    amount: 50000,
  },
  {
    id: 3,
    category: "Apartement Cost",
    date: "2023-08-17",
    amount: 1600000,
  },
];
