import React from "react";
import TextInput  from "../components/inputs/TextInput"
import { Step } from "../components/Step"
import { DropdownInput } from "../components/inputs/DropdownInput"

const fruits = [
  { id: 1, name: "Bananas 🍌" },
  { id: 2, name: "Strawberries 🍓" },
  { id: 3, name: "Kiwis 🥝" },
  { id: 4, name: "Blueberries 🫐" },
  { id: 5, name: "Watermelon 🍉" },
]

function StepOne({ errors: errors, register:register, formData:formData, setFormData:setFormData }) {
    return (
      <>
          <div className="form-group col-5">
              <label>First Name</label>
              <input name="firstName" type="text" {...register('firstName')} className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} />
              <div className="invalid-feedback">{errors.firstName?.message}</div>
          </div>
      </>
    )
/*   return (
      <Step back='/' next='/step-two'>
          <div className='flex flex-col gap-4'>
          <input name="firstName" type="text" {...register('firstName')} className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.firstName?.message}</div>

             {<TextInput registerFn={register("email")} isRequired={true} labelText='How should I call you?' />  }
            <DropdownInput
              question='Which one is your favourite fruit?'
              data={fruits}
            />
          </div>
        </Step>
  ) */
}

export default StepOne
