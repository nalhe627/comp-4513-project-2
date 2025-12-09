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
import { PieChart, Pie, Cell, Legend } from 'recharts';

import { CATEGORIES } from "../constants/filters";

const COLORS = [
    "#3772ff",
    "#df2935",
    "#cd3ea9ff",
    "#675dd7ff",
    "#76a441ff",
    "#393E41",
    "#B287A3",
    "#19c799ff",
    "#E65F5C",
    "#0091AD",
    "#fd8f58ff"
];

const Dashboard = ({ products, changeProduct }) => {
    const { cart, setCart } = useContext(CartContext);

    /**
     * Gets the top 10 products with the highest total sales, sorted by highest to lowest.
     * 
     * @returns {Object[]} An array of the top 10 products with the highest total sales
     */
    const getTop10Selling = () => {
        return products.toSorted((a, b) => b.sales.total - a.sales.total).slice(0, 10);
    };

    /**
     * Gets the top 10 products with the highest profit, sorted by highest to lowest
     * 
     * @returns {Object[]} An array of the top 10 products with the highest profit
     */
    const getTop10Profitable = () => {
        return products.toSorted((a, b) => b.totalProfit - a.totalProfit).slice(0, 10);
    };

    /**
     * Sums all sales and profits for each category, and returns an array of it.
     * 
     * Sorted by category's name alphabetically.
     * 
     * @returns {Object[]} An array of all the categories and their total sales and profits
     */
    const sortCategories = () => {
        const categories = CATEGORIES.map((categ) => ({
            name: categ,
            sales: 0,
            profit: 0
        }))

        for (const product of products) {
            for (const category of categories) {
                if (category.name === product.category) {
                    category.sales += product.sales.total;
                    category.profit += product.totalProfit;
                    break;
                }
            }
        }

        return categories;
    };

    /**
     * Gets the total sales for each gender.
     * 
     * @returns {Object[]} An array of two objects (men & women) with total sales for each
     */
    const getSalesByGender = () => {
        const genderData = [
            { 
                name: "Men", 
                value: 0 
            },
            { 
                name: "Women", 
                value: 0 
            }
        ];

        for (const product of products) {
            if (product.gender === "mens") {
                genderData[0].value += product.sales.total;
            } else {
                genderData[1].value += product.sales.total;
            }
        }
        
        return genderData;
    };


    const getSalesByCategory = () => {
        const categorySales = CATEGORIES.map((categ) => ({
            name: categ,
            value: 0,
        }))

        for (const product of products) {
            for (const category of categorySales) {
                if (category.name === product.category) {
                    category.value += product.sales.total;
                    break;
                }
            }
        }

        return categorySales;
    };

    /**
     * Changes the selectedProduct state when the user clicks on the product.
     * 
     * @param {string} id String of the product's id
     */
    const onProductClick = (id) => {
        const index = products.map((p) => p.id).indexOf(id);
        changeProduct(products[index]);
    }

    return (
        <div className="grid grid-cols-2 grid-rows-3 gap-5 border flex-grow m-5">
            <section className="rounded-lg">
                <p className="font-bold text-xl text-center mb-5">Top 10 Selling Products</p>
                <Table aria-label="Top 10 Selling Products">
                    <TableHeader>
                        <TableColumn>Product</TableColumn>
                        <TableColumn>Gender</TableColumn>
                        <TableColumn>Category</TableColumn>
                        <TableColumn>Total Sales</TableColumn>
                    </TableHeader>
                    <TableBody items={getTop10Selling()}>
                        {(product) => (
                            <TableRow key={product.id}>
                                <TableCell>
                                    <Link 
                                        href="/product" 
                                        onPress={() => onProductClick(product.id)}
                                        size="sm"
                                        underline="hover"
                                        color="foreground"
                                        className="font-semibold"
                                    >
                                        {product.name}
                                    </Link>
                                </TableCell>
                                <TableCell>{product.gender === "mens" ? "Mens" : "Womens"}</TableCell>
                                <TableCell>{product.category}</TableCell>
                                <TableCell>{product.sales.total}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </section>
            <section className="rounded-lg">
                <p className="font-bold text-xl text-center mb-5">Top 10 Profitable Products</p>
                <Table aria-label="Top 10 Profitable Products">
                    <TableHeader>
                        <TableColumn>Product</TableColumn>
                        <TableColumn>Gender</TableColumn>
                        <TableColumn>Category</TableColumn>
                        <TableColumn>Total Sales</TableColumn>
                        <TableColumn>Profit ($)</TableColumn>
                    </TableHeader>
                    <TableBody items={getTop10Profitable()}>
                        {(product) => (
                            <TableRow key={product.id}>
                                <TableCell>
                                    <Link 
                                        href="/product" 
                                        onPress={() => onProductClick(product.id)}
                                        size="sm"
                                        underline="hover"
                                        color="foreground"
                                        className="font-semibold"
                                    >
                                        {product.name}
                                    </Link>
                                </TableCell>
                                <TableCell>{product.gender === "mens" ? "Mens" : "Womens"}</TableCell>
                                <TableCell>{product.category}</TableCell>
                                <TableCell>{product.sales.total}</TableCell>
                                <TableCell>{product.totalProfit}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </section>
            <section className="row-span-2 rounded-lg">
                <p className="font-bold text-xl text-center mb-5">Sales + Profit by Category</p>
                <Table aria-label="Sales + Profit by Category">
                    <TableHeader>
                        <TableColumn>Category</TableColumn>
                        <TableColumn>Sales</TableColumn>
                        <TableColumn>Profit ($)</TableColumn>
                    </TableHeader>
                    <TableBody items={sortCategories()}>
                        {(category) => (
                            <TableRow key={category.name}>
                                <TableCell>{category.name}</TableCell>
                                <TableCell>{category.sales}</TableCell>
                                <TableCell>{category.profit}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </section>
            <section className="bg-gray-100 rounded-lg flex flex-col items-center">
                <p className="font-bold text-xl text-center mb-5">Sales Numbers By Gender</p>
                <PieChart 
                    style={{ 
                        width: '80%', 
                        height: '80%', 
                        maxWidth: '500px', 
                        maxHeight: '80vh', 
                        aspectRatio: 1 
                    }} 
                    responsive
                >
                    <Pie data={getSalesByGender()} label isAnimationActive>
                        <Cell key="cell-0" fill="#0496c7"></Cell>
                        <Cell key="cell-1" fill="#fa003f"></Cell>
                        <Legend />
                    </Pie>
                </PieChart>
            </section>
            <section className="bg-gray-100 rounded-lg flex flex-col items-center">
                <p className="font-bold text-xl text-center mb-5">Sales Numbers By Category</p>
                <PieChart 
                    style={{ 
                        width: '80%', 
                        height: '80%', 
                        maxWidth: '500px', 
                        maxHeight: '80vh', 
                        aspectRatio: 1 
                    }} 
                    responsive
                >
                    <Pie data={getSalesByCategory()} label isAnimationActive>
                        {getSalesByCategory().map((category, i) => (
                            <Cell key={`cell-${i}`} fill={COLORS[i]}></Cell>
                        ))}
                        <Legend />
                    </Pie>
                </PieChart>
            </section>
        </div>
    );
}

export default Dashboard;