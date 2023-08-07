const Checkbox = ({config}) => {
   return( <div class="form-check">
        <input class="form-check-input" type={config.type}
        value="" 
        id={config.id}
        checked={config.checked}
        name={config.name}
        onChange={e=>{
            config.onChange(e.target);
        }}/>
            <label class="form-check-label" for={config.id}>
                {config.displayText}
            </label>
    </div>
   )
}

export default Checkbox