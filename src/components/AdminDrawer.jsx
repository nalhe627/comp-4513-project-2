import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import { Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, Button, useDisclosure, } from "@heroui/react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell
} from "@heroui/table";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const AdminDrawer = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const domesticGross = product.sales.domestic * product.price;
  const internationalGross = product.sales.international * product.price;
  const totalGross = product.sales.total * product.price;

  const domesticCost = product.sales.domestic * product.cost;
  const internationalCost = product.sales.international * product.cost;
  const totalCost = product.sales.total * product.cost;

  const domesticProfit = domesticGross - domesticCost;
  const internationalProfit = internationalGross - internationalCost;
  const totalProfit = totalGross - totalCost;

  const data = [
    {
      name: "Domestic",
      Gross: domesticGross,
      Profit: domesticProfit,
      Cost: domesticCost
    },
    {
      name: "International",
      Gross: internationalGross,
      Profit: internationalProfit,
      Cost: internationalCost
    },
    {
      name: "Total",
      Gross: totalGross,
      Profit: totalProfit,
      Cost: totalCost
    }
  ]

  return (
    <>
      <Button onPress={onOpen}>Admin</Button>
      <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="text-center text-xl font-semibold">Admin Info</DrawerHeader>
              <DrawerBody>
                {/* Table 1: Sales */}
                <Table aria-label="Sales Table">
                  <TableHeader>
                    <TableColumn>Domestic Sales</TableColumn>
                    <TableColumn>International Sales</TableColumn>
                    <TableColumn>Total Sales</TableColumn>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>{product.sales.domestic}</TableCell>
                      <TableCell>{product.sales.international}</TableCell>
                      <TableCell>{product.sales.total}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                {/* Table 2: Gross */}
                <Table aria-label="Gross Table">
                  <TableHeader>
                    <TableColumn>Domestic Gross</TableColumn>
                    <TableColumn>International Gross</TableColumn>
                    <TableColumn>Total Gross</TableColumn>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>$ {domesticGross}</TableCell>
                      <TableCell>$ {internationalGross}</TableCell>
                      <TableCell>$ {totalGross}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                {/* Table 3: Cost */}
                <Table aria-label="Cost Table">
                  <TableHeader>
                    <TableColumn>Domestic Cost</TableColumn>
                    <TableColumn>International Cost</TableColumn>
                    <TableColumn>Total Cost</TableColumn>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>$ {domesticCost}</TableCell>
                      <TableCell>$ {internationalCost}</TableCell>
                      <TableCell>$ {totalCost}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                {/* Table 4: Profit */}
                <Table aria-label="Profit Table">
                  <TableHeader>
                    <TableColumn>Domestic Profit</TableColumn>
                    <TableColumn>International Profit</TableColumn>
                    <TableColumn>Total Profit</TableColumn>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>$ {domesticProfit}</TableCell>
                      <TableCell>$ {internationalProfit}</TableCell>
                      <TableCell>$ {totalProfit}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <BarChart
                  style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                  responsive
                  data={data}
                  margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis width="auto" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Gross" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                  <Bar dataKey="Profit" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                  <Bar dataKey="Cost" fill="#ffc658" activeBar={<Rectangle fill="lightgreen" stroke="red" />} />
                </BarChart>

              </DrawerBody>
              <DrawerFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default AdminDrawer;