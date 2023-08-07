import { useEffect, useState } from "react";
import Product from "../Components/Product";
import axios from "axios";

const Products = () => {
    const [productList, setProductList] = useState({ products: [] });



    const renderProducts = () => {
        return productList.products.map((item, index) => {
            console.log(item);
            return <div class="col-md-3"><Product product={item} key={index} /></div>
        })
    }

    useEffect(() => {

        const getRecords = async (limit) => {
            try {
             const result = await   axios.get('https://dummyjson.com/products?limit='+limit);
              setProductList(result.data);
            }
            catch(ex){
              console.log(ex);
            }
        }
        getRecords(20);
        // fetch('https://dummyjson.com/products')
        //     .then(response => {
        //         return response.json()
        //     }).then(result => {
        //         console.log(result);
        //         setProductList({...productList,...result})
        //     });
    }, [])
    return (
        <div class="row mt-5">
            {renderProducts()}
        </div>
    )

}

export default Products;

//
// totalNumberOfRecords
// NumberOfRecordsPerPage
// CurrentPage