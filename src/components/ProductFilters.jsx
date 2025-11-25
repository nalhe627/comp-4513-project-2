const ProductFilters = (props) => {
    const [ind, setInd] = useState();
    const handler = (e) => {
        setInd(e.target.value);
        props.setter(e.target.value);
    }
    return (
        <div className="product-filters">
            <input type="int" value={ind} onChange={handler} />"
        </div>
    );
}
export default ProductFilters;