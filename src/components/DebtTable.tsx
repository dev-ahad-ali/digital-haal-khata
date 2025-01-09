import { Debt } from '../utils/data';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface DebtTableProps {
  debts: Debt[];
}

export default function DebtTable({ debts }: DebtTableProps) {
  return (
    <Table>
      <TableCaption>A list of customer debts.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Customer Name</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {debts.map((debt) => (
          <TableRow key={debt.id}>
            <TableCell className='font-medium'>{debt.customerName}</TableCell>
            <TableCell>${debt.amount.toFixed(2)}</TableCell>
            <TableCell>{debt.date}</TableCell>
            <TableCell>
              <Badge
                variant={
                  debt.status === 'paid'
                    ? 'default'
                    : debt.status === 'partially paid'
                    ? 'secondary'
                    : 'destructive'
                }
              >
                {debt.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
