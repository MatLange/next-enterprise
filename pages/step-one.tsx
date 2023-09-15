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
import { useForm } from 'react-hook-form';
import { formOptions } from "../validations/validations"

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
  const { register, handleSubmit, reset, formState } = useForm({...formOptions, mode: 'all'});
  const { errors, isValid } = formState;


  const goToStep = (step : any, asPath:string) => {
    router.push(`/?step=${step}`, asPath);
  };

  const [page, setPage] = useState(0);
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

  /** Nnavigation between steps */
  const rightArrow = "https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/next-arrow_1pmaQTqF3.svg?updatedAt=1634410703345"
  const leftArrow  = "https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/back-arrow_ZBmeHiBP3.svg?updatedAt=1634410703363"
  const fieldGroups =[
    "<StepOne/>",
    "<StepTwo/>",
    "<StepThree/>"
  ]  
  const Navigation = () =>(
    <section>
      {
        page  === fieldGroups.length-1 && 
        <button type="submit" disabled={!isValid}>
          SAVE
        </button>
      }
      {
        page  < fieldGroups.length-1 &&
        <button type="button"  disabled={!isValid}  onClick={()=>{setPage(page + 1); }}>
          <img src={rightArrow}/>
          NEXT
        </button>
      }
      {
        page  > 0 &&
      <button type="button" disabled={!isValid} onClick={()=>{setPage(page - 1)}}>
        <img src={leftArrow}/>
        BACK
      </button>
      }
    </section>
  )  

  const PageDisplay = () => {
    if (page === 0) {
      return <StepOne errors={errors} register={register} formData={formData} setFormData={setFormData} />;             
    } else if (page === 1) {
      return <StepTwo register={register} formData={formData} setFormData={setFormData} />;
    } else {
      return <StepThree register={register} formData={formData} setFormData={setFormData} />;
    }
  };

  return (
<>
    <div className="card m-3">
    <h5 className="card-header">Next.js - Form Validation Example</h5>
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <PageDisplay />
          <Navigation/>          
        </form>
      </div>
    </div>    
        </>
  )
}

export default SteppOne
