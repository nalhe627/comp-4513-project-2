import { useState, useContext } from "react";
import { CartContext } from "../components/CartContext";
import { 
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell 
} from "@heroui/table";
import { Link } from "@heroui/link";

const Dashboard = ({ products }) => {
    const { cart, setCart } = useContext(CartContext);

    return (
        <div className="grid grid-cols-2 grid-rows-3 gap-5 border flex-grow m-5">
            <section className="bg-gray-100 rounded-lg">
                Top 10 Selling Products
                <Table>
                    <TableHeader>
                        <TableColumn>Product</TableColumn>
                        <TableColumn>Gender</TableColumn>
                        <TableColumn>Category</TableColumn>
                        <TableColumn>Total Sales</TableColumn>
                    </TableHeader>
                    <TableBody>
                        <TableRow key={1}>
                            <TableCell>
                                <Link href="/product">Hat</Link>
                            </TableCell>
                            <TableCell>Mens</TableCell>
                            <TableCell>Accessories</TableCell>
                            <TableCell>500</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </section>
            <section className="bg-gray-100 rounded-lg">Top 10 Profitable Products</section>
            <section className="bg-gray-100 row-span-2 rounded-lg">Sales + Profit by Category</section>
            <section className="bg-gray-100 rounded-lg">Pie Chart</section>
            <section className="bg-gray-100 rounded-lg">Pie Chart</section>
        </div>
    );
}

export default Dashboard;