import { useState } from "react";

const Textbox = ({ config }) => {
    const [data, setData] = useState(config.value)
    return (
        <div class="row mb-3">
            <label for={config.id} class="col-sm-2 col-form-label">{config.displayText}</label>
            <div class="col-sm-3">
                <input type={config.type} class="form-control" id={config.id} name={config.name}
                    value={data}
                    onChange={e => {
                        setData(e.target.value)
                        config.onChange(e.target)
                    }} />
            </div>
        </div>
    )
}
export default Textbox;