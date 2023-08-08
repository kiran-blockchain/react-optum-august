import { useSelector } from "react-redux"

export const Display  =()=>{
    const counter = useSelector(x=>x.counter);
    console.log(counter);
    return(
      <h1>Count: {counter.count}</h1>
    )
}