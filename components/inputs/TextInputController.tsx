 import * as React from "react";
import { TextField, TextFieldProps } from "@material-ui/core";
import {
  Controller,
  get,
  useController,
  UseControllerProps,
  useFormContext,
} from "react-hook-form";
export const TextInputController = (props:UseControllerProps & TextFieldProps)  => {
  const { field, fieldState } = useController(props);  
  const {...customProps}:TextFieldProps = props;
/*   const { fieldState } = useController(props);
  const { control, formState } = useFormContext();
  const error = get(formState.errors, props.name);
  const errorText = fieldState.invalid ? error.message : ""; */

  return (
    <Controller
      {...field}
      {...customProps}    
      render={({ field: { onChange, onBlur, value, ref }, formState, fieldState }) => {
        const error = get(formState.errors, props.name);
        const errorText = fieldState.invalid ? error.message : "";      
        return (
        <>
        <TextField {...field} 
                  helperText={errorText ? errorText : props.name}
                  error={!!errorText} 
                  defaultValue={props.defaultValue}       
                  variant="outlined"
                  size="small"                               
                  onChange={onChange} // send value to hook form
                  onBlur={onBlur} // notify when input is touched
                  value={value} // return updated value
                  ref={ref} // set ref for focus management      
      /> </> )
        }
    }
      />
/*            <Controller
             control={control}
             name="test"             
             render={({ field: { onChange, onBlur, value, ref }, formState, fieldState }) => (
               <>
                 <TextField
                   helperText={errorText ? errorText : props.name}
                   error={!!errorText} 
                   defaultValue={props.defaultValue}       
                   variant="outlined"
                   size="small"                               
                   onChange={onChange} // send value to hook form
                   onBlur={onBlur} // notify when input is touched
                   value={value} // return updated value
                   ref={ref} // set ref for focus management
                 />
                 <p>{formState.isSubmitted ? "submitted" : ""}</p>
                 <p>{fieldState.isTouched ? "touched" : ""}</p>
               </>
             )}
           />     */
/*      <Controller control={control} helperText={errorText ? errorText : props.helperText}      error={!!errorText} defaultValue={props.defaultValue}/> */
  );
};

