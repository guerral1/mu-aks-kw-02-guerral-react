import React from "react";
import { handle, rem } from "../../utils";
import Icon from "./Icon";
import { HeaderTitle, HeaderWrapper } from "./styledComponents";

const Header = ({
  id,
  expandItem,
  isExpanded,
  title,
  titleAs,
  onToggle,
  ariaLabel,
  variant,
  ariaControls,
}) => {
  return (
    <HeaderWrapper
      id={id}
      role="button"
      aria-label={ariaLabel}
      aria-expanded={isExpanded}
      aria-controls={ariaControls}
      tabIndex={0}
      onClick={(event) => {
        handle(onToggle)(event, isExpanded);
        expandItem();
      }}
      onKeyDown={(event) => {
        if (event.key === " " || event.key === "Enter") {
          handle(onToggle)(event, isExpanded);
          expandItem();
        }
      }}
    >
      <Icon
        secondaryColor="#ec6453"
        color="#ec6453"
        fill="#fff"
        height={rem(12)}
        width={rem(12)}
      />
      <HeaderTitle as={titleAs} variant={variant} data-testid={`${id}-title`}>
        {title}
      </HeaderTitle>
    </HeaderWrapper>
  );
};

Header.displayName = "Header";

export default Header;
