import { useEffect, useState } from "react"
import { apiGet } from "../../hooks/useApi";

export const Counter =()=>{
    const [count,setCount]= useState(0);
    const [result,setResult] = useState({});
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await apiGet('https://dummyjson.com/products');
                setResult({ status: 200, data: response.data })
            }
            catch (ex) {
                setResult({ status: 400, data: [] })
            }
        }
        getData();
    }, []);

    return(<div>
        <h1>Count {count}</h1>
        <button onClick={e=>{
            setCount(count+1);
        }}>increment</button>
    </div>)
}