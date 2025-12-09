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

const TopSellingTable = ({ products, onProductClick }) => {
    /**
     * Gets the top 10 products with the highest total sales, sorted by highest to lowest.
     * 
     * @returns {Object[]} An array of the top 10 products with the highest total sales
     */
    const getTop10Selling = () => {
        return products.toSorted((a, b) => b.sales.total - a.sales.total).slice(0, 10);
    };
    
    return (
        <section className="rounded-xl">
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
                            <TableCell>{formatFilterText(product.gender)}</TableCell>
                            <TableCell>{product.category}</TableCell>
                            <TableCell>{product.sales.total}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </section>
    );
};

export default TopSellingTable;