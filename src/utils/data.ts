export interface Debt {
  id: string;
  customerName: string;
  amount: number;
  date: string;
  status: 'unpaid' | 'partially paid' | 'paid';
}

export const dummyDebts: Debt[] = [
  { id: '1', customerName: 'John Doe', amount: 1000, date: '2023-01-15', status: 'unpaid' },
  {
    id: '2',
    customerName: 'Jane Smith',
    amount: 750,
    date: '2023-02-01',
    status: 'partially paid',
  },
  { id: '3', customerName: 'Bob Johnson', amount: 500, date: '2023-02-15', status: 'paid' },
  { id: '4', customerName: 'Alice Brown', amount: 1250, date: '2023-03-01', status: 'unpaid' },
  { id: '5', customerName: 'Charlie Davis', amount: 800, date: '2023-03-15', status: 'unpaid' },
];

export const calculateTotalDebt = (debts: Debt[]): number => {
  return debts.reduce((total, debt) => total + debt.amount, 0);
};

export const countUnpaidDebts = (debts: Debt[]): number => {
  return debts.filter((debt) => debt.status === 'unpaid').length;
};
