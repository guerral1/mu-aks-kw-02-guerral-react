import styled from "styled-components";

import { typography } from "../../typography/typography";
import { rem } from "../../utils";

import { EXPANDABLE_PANEL_VARIANT } from "./constants";

// Styled components for ExpandablePanel
export const ExpandablePanelWrapper = styled.div`
  font-family: ${typography.fontFamily};
  line-height: ${typography.lineHeight};
  width: 100%;
  box-sizing: border-box;
  background-color: ${({ variant }) =>
    variant === EXPANDABLE_PANEL_VARIANT.PRIMARY ? "#FFF" : "transparent"};
  padding: ${({ variant }) =>
    variant === EXPANDABLE_PANEL_VARIANT.PRIMARY ? "18px 20px" : "0"};
  border: ${({ variant }) =>
    variant === EXPANDABLE_PANEL_VARIANT.PRIMARY
      ? `1px solid #EDEDED`
      : "none"};
  color: #34384b;
  ${({ expandablePanelStyle }) => expandablePanelStyle}
`;
ExpandablePanelWrapper.displayName = "ExpandablePanelWrapper";

// Styled components for Header
export const HeaderWrapper = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: start;
  vertical-align: middle;
  ${({ headerWrapperStyle }) => headerWrapperStyle}
`;
HeaderWrapper.displayName = "HeaderWrapper";

export const HeaderTitle = styled.span`
  display: inline-block;
  margin: 3px 0 0 12px;
  font-size: ${rem(18)};
  font-family: ${typography.fontFamily};
  font-weight: ${({ variant }) =>
    variant === EXPANDABLE_PANEL_VARIANT.PRIMARY
      ? typography.fontWeightDemiBold
      : typography.fontWeightLight};
  ${({ titleStyle }) => titleStyle}
`;
HeaderTitle.displayName = "HeaderTitle";

// Styled components for Body
export const BodyWrapper = styled.div`
  padding-top: 12px;
  margin: 0 0 10px;
  line-height: ${rem(24)};
  transition: flex 0.3s ease-out;
  height: auto;
  display: ${({ isExpanded }) => (isExpanded ? "block" : "none")};
  margin-left: ${({ variant }) =>
    variant === EXPANDABLE_PANEL_VARIANT.PRIMARY ? "32px" : "24px"};
  font-weight: 300;
  ${({ bodyStyle }) => bodyStyle}
`;
BodyWrapper.displayName = "BodyWrapper";
