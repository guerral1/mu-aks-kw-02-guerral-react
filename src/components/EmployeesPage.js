import React from "react";
import { getAllEmployees } from "../services/apiService";
import EmployeeItem from "./EmployeeItem";
import useAsync from "../hooks/useAsync";
import { H3, H1} from "../typography/styledComponents";

function EmployeesPage() {
  const asyncFunction = getAllEmployees;
  const { pending, value, error } = useAsync(asyncFunction, true);

  const renderEmployees = () => {
    if (pending) {
      return <H3>Loading...</H3>;
    } else if (error) {
      return <H3>Oops! There's something error in the server ☹️</H3>;
    } else if (value) {
      return value.map((employee) => (
        <EmployeeItem key={employee.id} employee={employee} />
      ));
    } else {
      return null;
    }
  };

  return (
    <div>
      <H1>Here's the list of employees...</H1>
      {renderEmployees()}
    </div>
  );
}

export default EmployeesPage;
