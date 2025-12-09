import { PieChart, Pie, Cell, Legend } from 'recharts';

const GenderPieChart = ({ products}) => {
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
    
    return (
       <section className="border border-gray-200 rounded-xl shadow-sm flex flex-col items-center">
            <p className="font-bold text-xl text-center my-5">Sales Numbers By Gender</p>
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
    );
};

export default GenderPieChart;