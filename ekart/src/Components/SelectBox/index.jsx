const Select = ({config}) => {
     const renderCountryList  =()=>{    
        return config.data.map((item,index)=>{
            return  <option key={index} value={item.key}>{item.name}</option>
        })
     }
    return(
        <div class="row mb-3">
        <label for="countryList" class="col-sm-2 col-form-label">Countries</label>
        <div class="col-sm-3">
           <select id="countryList"
           className="form-control"
           name="country">
            <option value="">Please Select</option>
            {renderCountryList()}
           </select>
        </div>
    </div>
    )

}
export default Select;