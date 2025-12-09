import { 
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell 
} from "@heroui/table";
import { Link } from "@heroui/link";
import { formatFilterText } from "../utils/browse-page";

const TopProfitableTable = ({ products, onProductClick }) => {
    /**
     * Gets the top 10 products with the highest profit, sorted by highest to lowest
     * 
     * @returns {Object[]} An array of the top 10 products with the highest profit
     */
    const getTop10Profitable = () => {
        return products.toSorted((a, b) => b.totalProfit - a.totalProfit).slice(0, 10);
    };
    
    return (
        <section className="rounded-xl">
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
                            <TableCell>{formatFilterText(product.gender)}</TableCell>
                            <TableCell>{product.category}</TableCell>
                            <TableCell>{product.sales.total}</TableCell>
                            <TableCell>{product.totalProfit}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </section>
    );
};

export default TopProfitableTable;