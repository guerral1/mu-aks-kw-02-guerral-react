import React from "react";
import { useHistory } from "react-router-dom";
import { H1, P } from "../typography/styledComponents";
import { Button } from "./Button";

function HomePage() {
  const history = useHistory();

  return (
    <div>
      <H1>Welcome to MU AKS Portal!</H1>
      <P>
        When your API is ready, click the following button to load employee
        details.
      </P>
      <Button onClick={() => history.push("/employees")}>Load Employees</Button>
    </div>
  );
}

export default HomePage;
