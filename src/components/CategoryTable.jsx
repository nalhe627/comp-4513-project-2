import { 
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell 
} from "@heroui/table";
import { CATEGORIES } from "../constants/filters";

const CategoryTable = ({ products }) => {
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
    
    return (
        <section className="col-span-2 rounded-xl">
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
    );
};

export default CategoryTable;