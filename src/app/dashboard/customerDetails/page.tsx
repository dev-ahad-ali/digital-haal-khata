import DebtTable from '@/components/DebtTable';
import { dummyDebts } from '@/utils/data';
export default function CustomerDetails() {
  return <DebtTable debts={dummyDebts} />;
}
