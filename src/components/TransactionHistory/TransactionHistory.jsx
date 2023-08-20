import { StyledTable, TableHeader, TableCell } from "./TransactionHistory.styled";
export default function TransactionHistory({ items }) {
  return (
    <StyledTable>
      <thead>
        <tr>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <TableCell>{item.type}</TableCell>
            <TableCell>{item.amount}</TableCell>
            <TableCell>{item.currency}</TableCell>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}
