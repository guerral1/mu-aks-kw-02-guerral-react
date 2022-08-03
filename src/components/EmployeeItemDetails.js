import React from 'react';
import { P } from '@manulife/mux';

function EmployeeItemDetails({ dob, title }) {
  return (
    <>
      <P>DOB: {dob}</P>
      <P>Title: {title}</P>
    </>
  );
}

export default EmployeeItemDetails;
