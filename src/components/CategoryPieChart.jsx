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


const CategoryPieChart = ({ products}) => {
    /**
     * Gets the total sales for each category.
     * 
     * @returns {Object[]} An array of object containg the total sales for all categories
     */
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
    
    return (
       <section className="border border-gray-200 rounded-xl shadow-sm flex flex-col items-center">
            <p className="font-bold text-xl text-center my-5">Sales Numbers By Category</p>
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
    );
};

export default CategoryPieChart;