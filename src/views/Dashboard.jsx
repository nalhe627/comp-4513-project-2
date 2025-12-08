import { useState, useContext } from "react";
import { CartContext } from "../components/CartContext";

const Dashboard = (props) => {
    const { cart, setCart } = useContext(CartContext);

    return (
        <div className="grid grid-cols-2 grid-rows-3 gap-5 border flex-grow m-5">
            <section className="bg-gray-100 rounded-lg">Top 10 Selling Products</section>
            <section className="bg-gray-100 rounded-lg">Top 10 Profitable Products</section>
            <section className="bg-gray-100 row-span-2 rounded-lg">Sales + Profit by Category</section>
            <section className="bg-gray-100 rounded-lg">Pie Chart</section>
            <section className="bg-gray-100 rounded-lg">Pie Chart</section>
        </div>
    );
}

export default Dashboard;