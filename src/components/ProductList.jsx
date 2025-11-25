import ProductCard from "./ProductCard";

const ProductList = (props) => {
    const handler = (ind) => {
        props.change(ind);
    }
    return (
        <ul>
            {props.products.map((p, index) => (
                <li key={index} onClick={() => handler(index)}>
                    {p.title}
                </li>
            ))}
        </ul>
    )
}
export default ProductList;