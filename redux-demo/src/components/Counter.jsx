import { useDispatch } from "react-redux";
import { increment } from "../store/counterSlice";

export const Counter =()=>{
    const dispatch = useDispatch();
    return(
        <button onClick={e=>{
            console.log("Incrementing");
            dispatch(increment());
            
        }}>Increment</button>
    )
}