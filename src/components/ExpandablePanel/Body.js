import React from "react";

import { BodyWrapper } from "./styledComponents";

const Body = ({
  id,
  ariaLabelledBy,
  isExpanded,
  children,
  variant,
}) => {
  return (
    <BodyWrapper
      id={id}
      aria-labelledby={ariaLabelledBy}
      isExpanded={isExpanded}
      variant={variant}
    >
      {children}
    </BodyWrapper>
  );
};

export default Body;
