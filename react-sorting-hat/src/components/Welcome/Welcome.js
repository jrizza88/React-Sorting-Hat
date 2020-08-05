
import React from 'react';

const Welcome = ({nameOfStudent}) => {
  return (
    <div key={nameOfStudent.id}>
     Welcome to Hogwarts,  {nameOfStudent.nameOfStudent}!
    </div>
  );
};

export default Welcome;