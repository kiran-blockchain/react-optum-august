import { useState } from "react";

const Textbox = ({config}) => {
   const[data,setData] = useState(config.value)
    return (
        <div class="mb-3">
            <label for={config.id} class="form-label">{config.displayText}</label>
            <input type={config.type}
                className="form-control"
                id={config.id}
                name={config.name}
                value={data}
                onChange={e => {  
                    setData(e.target.value) 
                    config.onChange(e.target.value);
                }}
                placeholder={config.placeholder} />
        </div>
    )
}
export default Textbox;