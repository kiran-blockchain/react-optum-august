import { useEffect, useState } from "react";
import Product from "../Components/Product";
import axios from "axios";
import { useApiGet } from "../hooks/useApi";

const Products = () => {
    const productList = useApiGet('https://dummyjson.com/products');
    const renderProducts = () => {
        if (productList.data && productList.data.products) {
            return productList.data.products.map((item, index) => {
                console.log(item);
                return <div class="col-md-3"><Product product={item} key={index} /></div>
            });
        }
        return <div>There are no products</div>;
    }
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