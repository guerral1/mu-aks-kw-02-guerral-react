import React, { useCallback } from "react";
import { getDetailsById } from "../services/apiService";
import useAsync from "../hooks/useAsync";
import { P } from "../typography/styledComponents";
import ExpandablePanel from "./ExpandablePanel/ExpandablePanel";

function EmployeeItem({ employee }) {
  const { id, name } = employee;
  const asyncFunction = useCallback(() => getDetailsById(id), [id]);
  const { value, pending, error, execute } = useAsync(asyncFunction, true);

  const handleToggle = (isCollapsed) => {
    if (!isCollapsed) {
      execute();
    }
  };

  const renderDetails = () => {
    if (pending) {
      return <P>Loading Details...</P>;
    } else if (error) {
      return <P>Oops! Error Loading employee details.</P>;
    } else {
      return (
        <>
          <P>DOB: {value.dob}</P>
          <P>Title: {value.title}</P>
        </>
      );
    }
  };

  return (
    <ExpandablePanel title={name} onToggle={handleToggle}>
      {renderDetails()}
    </ExpandablePanel>
  );
}

export default EmployeeItem;
