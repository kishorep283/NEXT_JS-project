// types.d.ts
export interface Transaction {
  _id?: string; // Optional, as it may not be present when creating a new transaction
  amount: number;
  date: string; // You can also use Date if you prefer
  description: string;
  category: string;
}
