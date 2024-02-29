import "./index.css"
const ToggleCheckbox = ({ name, checked, onChange, value}:{name:string,checked:boolean, onChange:(e:any)=>void, value:"Male" | "Female" | "Other"}) => {
    return(
        <div className="toggle_checkbox">
        <label className="switch">
            <input name={name} checked={checked} value={value} type="radio"  onChange={(e)=>{onChange(e)}} />
            <div className="slider round"></div>
        </label>
    </div>
    )
    
}
export default ToggleCheckbox