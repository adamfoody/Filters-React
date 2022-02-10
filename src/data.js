import React from 'react';
import MedicalTreatment from './medicalTreatment';

export const categories = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  ALL: 'all',
};

//DRY principle. Created a category object which is referenced in TreatmentData. 

export const types = {
  PRESCRIPTION: 'prescription',
  REHABILITATION: 'rehabilitation',
  PHYSIOTHERAPY: 'physiotherapy',
  SURGERY: 'surgery',
  ALL: 'all',
};

//DRY principle. Created a type object which is referenced in TreatmentData



export const treatmentData = [
  {
    treatId: 1,
    treatCourseId: 100,
    type: types.PRESCRIPTION,
    category: categories.LOW,
    name: 'Adam Foody3',
    startDate: new Date(2018, 11, 24, 10, 33, 30, 0).toUTCString(),
  },

  {
    treatId: 2,
    treatCourseId: 101,
    type: types.REHABILITATION,
    category: categories.MEDIUM,
    name: 'Adam Foody2',
    startDate: new Date(2018, 11, 24, 10, 33, 30, 0).toUTCString(),
  },
  {
    treatId: 3,
    treatCourseId: 102,
    type: types.SURGERY,
    category: categories.MEDIUM,
    name: 'Adam Foody3',
    startDate: new Date(2018, 11, 24, 10, 33, 30, 0).toUTCString(),
  },
  {
    treatId: 4,
    treatCourseId: 103,
    type: types.SURGERY,
    category: categories.HIGH,
    name: 'Adam Foody4',
    startDate: new Date(2018, 11, 24, 10, 33, 30, 0).toUTCString(),
  },
  {
    treatId: 5,
    treatCourseId: 104,
    type: types.PHYSIOTHERAPY,
    category: categories.LOW,
    name: 'Adam Foody',
    startDate: new Date(2018, 11, 24, 10, 33, 30, 0).toUTCString(),
  },
];

//I have created a JSON object called treatmentData. treatmentData will be the data that is filtered, mapped and then rendered. 

// I have added a startDate variable to the TreatmentData Object. I have used then used the toUTCString method which returns a date object as a string,

