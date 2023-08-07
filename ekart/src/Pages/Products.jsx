import { useEffect, useState } from "react";
import Product from "../Components/Product";

const Products = () => {
    const [productList, setProductList] = useState({products:[]});

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => {
                return response.json()
            }).then(result => {
                console.log(result);
                setProductList({...productList,...result})
            });
    }, [])

    const renderProducts = ()=>{
        return productList.products.map((item,index)=>{
            console.log(item);
            return <div class="col-md-3"><Product product={item} key={index}/></div>
        })
    }

    return (
        <div class="row mt-5">
            {renderProducts()}
        </div>
    )

}

export default Products;