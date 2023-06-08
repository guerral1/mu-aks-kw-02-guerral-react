import React from "react";

import Body from "./Body";
import Header from "./Header";
import { ExpandablePanelWrapper } from "./styledComponents";
import useDerivedState from "../../hooks/useDerivedState";
import { EXPANDABLE_PANEL_VARIANT } from "./constants";

const ExpandablePanel = ({
  id: controlledId,
  title,
  titleAs,
  onToggle,
  ariaLabel,
  children,
  variant = EXPANDABLE_PANEL_VARIANT.PRIMARY,
  expandIcon,
  collapseIcon,
  expandedByDefault: defaultExpanded,
  isExpanded: controlledExpanded,
}) => {
  const [id] = useDerivedState("expandable-panel-id", controlledId);
  const [isExpanded, setExpanded] = useDerivedState(
    defaultExpanded,
    controlledExpanded
  );

  return (
    <ExpandablePanelWrapper id={id} data-testid={id} variant={variant}>
      <Header
        id={`${id}-header`}
        data-testid={`${id}-header`}
        title={title}
        titleAs={titleAs}
        ariaLabel={ariaLabel}
        ariaControls={`${id}-body`}
        isExpanded={isExpanded}
        onToggle={onToggle}
        expandItem={() => setExpanded(!isExpanded)}
        variant={variant}
        expandIcon={expandIcon}
        collapseIcon={collapseIcon}
      />
      <Body isExpanded={isExpanded} variant={variant}>
        {children}
      </Body>
    </ExpandablePanelWrapper>
  );
};
ExpandablePanel.displayName = "ExpandablePanel";

export default ExpandablePanel;
