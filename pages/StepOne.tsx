import React from "react";
import { TextInputController } from "../components/inputs/TextInputController"
import { Step } from "../components/Step"
import { DropdownInput } from "../components/inputs/DropdownInput"

const fruits = [
  { id: 1, name: "Bananas 🍌" },
  { id: 2, name: "Strawberries 🍓" },
  { id: 3, name: "Kiwis 🥝" },
  { id: 4, name: "Blueberries 🫐" },
  { id: 5, name: "Watermelon 🍉" },
]


function StepOne({ name:name, control:control, errors: errors, register:register, formData:formData, setFormData:setFormData }) {
  const compProps = register(name);
  return (
      <>
          <div className="form-group col-5">
{/*               <label>First Name</label>
              <input name={name} type="text" {...register(name)} className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} />
              <div className="invalid-feedback">{errors.firstName?.message}</div> */}
              <TextInputController control={control} {...register(name)} name={name}/> 
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
