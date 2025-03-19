import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { fetchAdminOrders } from '@/utils/actions'
import { formatCurrency, formatDate } from '@/utils/format'

async function SalesPage() {
  const orders = await fetchAdminOrders()

  return (
    <div>
      <Table>
        <TableCaption>Total orders: {orders.length}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead>Products</TableHead>
            <TableHead>Order Total</TableHead>
            <TableHead>Tax</TableHead>
            <TableHead>Shipping</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              {' '}
              {/* ✅ Ensuring id is used */}
              <TableCell>{order.email}</TableCell>
              <TableCell>{order.products}</TableCell>
              <TableCell>{formatCurrency(order.orderTotal)}</TableCell>
              <TableCell>{formatCurrency(order.tax)}</TableCell>
              <TableCell>{formatCurrency(order.shipping)}</TableCell>
              <TableCell>{formatDate(order.createdAt)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default SalesPage
