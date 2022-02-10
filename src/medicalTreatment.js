import React, { useState } from 'react';
import { treatmentData, types, categories } from './data';
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  makeStyles,
  Button
} from '@material-ui/core';


//creating a constant to add styles calling makeStyles. Passing a theme parameter so we can use it on the styling if we want too.

const useStyles = makeStyles((theme) => ({
  FormControl: {
    minWidth: 100,
  },
}));

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//function to format a string ensuring the first letter has been capitilized using capitalizeFirstLetter. 


//explain .slice 

function MedicalTreatmentList() {
  const myStyles = useStyles();
  // explain code

  const [catValue, setCatValue] = useState(categories.ALL);
  const [typeValue, setTypeValue] = useState(types.ALL);

  const [disableData, setDisableData] = useState("");
  const [enableData, setEnableData] = useState("")


  
  
  //Rendering the title "Adams Treatment Centre".

  //Created a handleChange function which takes in an event and sets assigns that value to catValue using setCatValue. 
  ///Created a handleTypeChange function which takes in an event and sets assigns that value to typeValue using setType Value. 

  const handleCatChange = (e) => setCatValue(e.target.value);
  const handleTypeChange = (e) => setTypeValue(e.target.value);
  const handleDisableButton = (e) => setDisableData(e.target.value);
  const handleEnableButton = (e) => setEnableData(e.target.value);
  

  let filterTreatments = (treatment) => {
    return (
      (treatment.category === catValue || catValue === categories.ALL) &&
      (treatment.type === typeValue || typeValue === types.ALL)
    );
  };




  //created a filterTreatments function which changes catValue and typeValue. OR sets cat value equal to our ALL field in categories JSON object. 

  return (



    
    <div>
      <h1>Adams Treatment Centre!</h1>
      <Button variant="contained" size = "small" enabled onchange={handleEnableButton}>Show Treatments</Button>
      <Button variant ="contained" size = "small" enabled onChange={handleDisableButton}>Close Treatments</Button>
      <div>
        <FormControl className={myStyles.FormControl}>
          <InputLabel> Category </InputLabel>
          <Select onChange={handleCatChange}>
            <MenuItem value={categories.ALL}>
              {capitalizeFirstLetter(categories.ALL)}
            </MenuItem>
            <MenuItem value={categories.HIGH}>
              {capitalizeFirstLetter(categories.HIGH)}
            </MenuItem>
            <MenuItem value={categories.MEDIUM}>
              {capitalizeFirstLetter(categories.MEDIUM)}
            </MenuItem>
            <MenuItem value={categories.LOW}>
              {capitalizeFirstLetter(categories.LOW)}
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl className={myStyles.FormControl}>
          <InputLabel> Type </InputLabel>
          <Select onChange={handleTypeChange}>
            <MenuItem value={types.ALL}>
              {capitalizeFirstLetter(types.ALL)}
            </MenuItem>
            <MenuItem value={types.PHYSIOTHERAPY}>
              {capitalizeFirstLetter(types.PHYSIOTHERAPY)}
            </MenuItem>
            <MenuItem value={types.REHABILITATION}>
              {capitalizeFirstLetter(types.REHABILITATION)}
            </MenuItem>
            <MenuItem value={types.PRESCRIPTION}>
              {capitalizeFirstLetter(types.PRESCRIPTION)}
            </MenuItem>
            <MenuItem value={types.SURGERY}>
              {capitalizeFirstLetter(types.SURGERY)}
            </MenuItem>
          </Select>
          
        </FormControl>
      </div>
      {treatmentData
        .filter((treatment) => filterTreatments(treatment))
        .map((treatment) => (
          <ul>
            <small>
              <li>Treat ID: {treatment.treatId} </li>
              <li>TreatCourseId: {treatment.treatCourseId} </li>
              <li>Type: {treatment.type} </li>
              <li>Category {treatment.category} </li>
              <li>Name: {treatment.name} </li>
              <li>StartDate: {treatment.startDate} </li>
            </small>
          </ul>
        ))}
    </div>

    
  );
}

export default MedicalTreatmentList;
