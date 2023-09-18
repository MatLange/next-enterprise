import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { StepsLayout } from "../components/StepsLayout";
import  StepOne  from "./StepOne";
import  StepTwo  from "./StepTwo";
import  StepThree  from "./StepThree";
import TextInput  from "../components/inputs/TextInput";

import { Step } from "../components/Step";
import { DropdownInput } from "../components/inputs/DropdownInput";
import { useRouter } from "next/router";
import { FormProvider, useForm } from 'react-hook-form';
import { validationSchemas } from "../validations/validations";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


const fruits = [
  { id: 1, name: "Bananas 🍌" },
  { id: 2, name: "Strawberries 🍓" },
  { id: 3, name: "Kiwis 🥝" },
  { id: 4, name: "Blueberries 🫐" },
  { id: 5, name: "Watermelon 🍉" },
]

const FormTitles = ["Sign Up", "Personal Info", "Other"];

const SteppOne = () => {
  const router = useRouter();
  const formStep = router.query.step ?? 0;
  
  // get functions to build form with useForm() hook
  const goToStep = (step : any, asPath:string) => {
    router.push(`/?step=${step}`, asPath);
  };
  const [page, setPage] = useState(0);

  const currentValidationSchema = validationSchemas[page];  
  const { register, handleSubmit, reset, trigger, control, formState } = useForm({...currentValidationSchema, mode: 'all'});
  const methods = useForm({resolver: yupResolver(currentValidationSchema), mode: 'all'});

/*   const methods = useForm({
    shouldUnregister: false,
    defaultValues,
    resolver: yupResolver(currentValidationSchema),
    mode: "onChange"
  });  
 */  const { errors, isValid } = methods.formState;



  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

  function onSubmit(data:any) {
    // display form data on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
    return false;
  }    

  function onInvalid(data:any) {
    // display form data on success
    methods.trigger();
  }    
  /** Nnavigation between steps */
  const rightArrow = "https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/next-arrow_1pmaQTqF3.svg?updatedAt=1634410703345"
  const leftArrow  = "https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/back-arrow_ZBmeHiBP3.svg?updatedAt=1634410703363"
  const fieldGroups =[
    "<StepOne/>",
    "<StepTwo/>",
    "<StepThree/>"
  ]  

  const handleNext = async () => {
    const isStepValid = await methods.trigger();
    if (isStepValid) setPage((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setPage((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setPage(0);
    methods.reset();
  };


  function handleOnClick (e:any) {
    methods.handleSubmit(onSubmit, onInvalid);
    setPage(page + 1);

/*     const oPromise = trigger();
    oPromise.then((triggerResult:any) => {
      if (triggerResult === true) {
        setPage(page + 1);
      }
    });   
 */  }
  
  const Navigation = () => {
    const isValidisValid = isValid;
    return <section>
      {
        page  === fieldGroups.length-1 && 
        <button type="submit" >
          SAVE
        </button>
      }
      {
        page  < fieldGroups.length-1 &&
        <button type="button" onClick={handleNext}>
          <img src={rightArrow}/>
          NEXT
        </button>
      }
      {
        page  > 0 &&
      <button type="button" onClick={()=>{setPage(page - 1)}}>
        <img src={leftArrow}/>
        BACK
      </button>
      }
    </section>
  };

  const PageDisplay = () => {
    if (page === 0) {
      return <StepOne name={""} control={control} errors={errors} register={methods.register} formData={formData} setFormData={setFormData} />;             
    } else if (page === 1) {
      return <StepTwo register={methods.register} formData={formData} setFormData={setFormData} />;
    } else {
      return <StepThree register={methods.register} formData={formData} setFormData={setFormData} />;
    }
  };

  return (
<>
    <div className="card m-3">
    <h5 className="card-header">Next.js - Form Validation Example</h5>
      <div className="card-body">
        <FormProvider {...methods}>        
          <form>
            <PageDisplay />
            <Navigation/>          
          </form>
        </FormProvider>          
      </div>
    </div>    
        </>
  )
}

export default SteppOne
