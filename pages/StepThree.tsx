import React from "react";
import { TextArea } from "../components/inputs/TextArea"
import { NavigationButtons } from "../components/NavigationButtons"
import { RadioInput } from "../components/inputs/RadioInput"
import useFormStore from "../store/form"

function StepTwo({ register, formData, setFormData }) {
  const { radioOption } = useFormStore()

  return (
    <div className='flex flex-col justify-between min-w-[500px] min-h-[200px]'>
    <div className='flex flex-col gap-8'>
      <RadioInput question='Anything else to add?' />
      {radioOption === "yes" ? (
        <TextArea labelText='Please write here ⬇' />
      ) : null}
    </div>
    <NavigationButtons back='/step-one' next='/your-answers' />
  </div>
  )
}

export default StepTwo
