
import React from 'react';

const Welcome = ({nameOfStudent}) => {
  return (
    <div key={nameOfStudent.id}>
     Welcome, {nameOfStudent.nameOfStudent}!
    </div>
  );
};

export default Welcome;