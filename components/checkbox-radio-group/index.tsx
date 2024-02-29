import { CheckboxGenderOptions } from "@/app/(auth)/register/page";
import ToggleCheckbox from "../ui/toggle-checkbox";



const CheckboxRadioGroup = ({ options, selectedOption, onChange }:{options:CheckboxGenderOptions[],selectedOption:"Male"|"Female"|"Other",onChange:(e:any)=>void}) => {
    return (
      <div className="radio-group w-52 flex justify-between items-center">
        {options.map((option) => (
            <div key={option.id} className="flex flex-col items-center">
            <h3>{option.option.toUpperCase()}</h3>
            <ToggleCheckbox
            
            name="radioGroup" // Give all radios the same name
            checked={selectedOption === option.value}
            onChange = {onChange}
            value={option.value}
          />
            </div>
        ))}
      </div>
    );
  };
  
  export default  CheckboxRadioGroup;