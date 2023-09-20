import React from "react";
import { SelectController } from "../components/materialui/SelectController";
import { TextInputController } from "../components/materialui/TextInputController";
import Box from "@mui/material/Box";
import {
  useController,
} from "react-hook-form";

const fruits = [
  { id: 1, name: "Bananas 🍌" },
  { id: 2, name: "Strawberries 🍓" },
  { id: 3, name: "Kiwis 🥝" },
  { id: 4, name: "Blueberries 🫐" },
  { id: 5, name: "Watermelon 🍉" },
]


function StepOne({ control:control, register:register }) {
  return (
      <>
    <Box flexDirection="column"
                  display="flex"
                  alignItems="center" p={2}>
      <Box       sx={{
        '& .MuiFormControl-root': { m: 1, width: '50ch' },
        
      }} mt={2}>
        <SelectController required={true} control={control}  {...useController({...register("title")})}  label="Which one is your favourite fruit?" name="title"  menuItems={fruits}/> 
        </Box>          
        <Box       sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
      }} mt={2}>
        <TextInputController control={control} {...useController({...register("firstName")})} label="firstName" name="firstName"/> 
        </Box>                
        <Box       sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
      }} mt={2}>
        <TextInputController control={control} {...useController({...register("lastName")})} label="lastName" name="lastName"/> 
        </Box>        
        </Box>
      </>
    )
}

export default StepOne
