import TopSellingTable from '../components/TopSellingTable';
import TopProfitableTable from '../components/TopProfitableTable';
import CategoryTable from '../components/CategoryTable';
import GenderPieChart from '../components/GenderPieChart';
import CategoryPieChart from '../components/CategoryPieChart';

const Dashboard = ({ products, changeProduct }) => {
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
        <div className="py-10">
            <p className="font-bold text-4xl text-center mb-10">Sales Dashboard</p>
            <div className="grid grid-cols-2 grid-rows-3 gap-x-10 flex-grow m-5">
                <TopSellingTable products={products} onProductClick={onProductClick} />
                <TopProfitableTable products={products} onProductClick={onProductClick} />
                <CategoryTable products={products} />
                <GenderPieChart products={products} />
                <CategoryPieChart products={products} />
            </div>
        </div>
    );
}

export default Dashboard;