import styled from "styled-components";

import { BREAKPOINTS, rem } from "../utils";

import { typography } from "./typography";

export const H1 = styled.h1`
  font-family: ${typography.fontFamily};
  font-weight: ${typography.fontWeightLight};
  font-size: ${rem(44)};
  line-height: ${rem(54)};
  color: ${({ color }) => color};
  ${({ disableFocusOutline }) =>
    disableFocusOutline && `&:focus {outline: none;}`}

  @media (max-width: ${BREAKPOINTS.TABLET_PORTRAIT}px) {
    font-size: ${rem(30)};
    line-height: ${rem(40)};
  }
  ${({ elementStyle }) => elementStyle}
`;

export const H2 = styled.h2`
  font-family: ${typography.fontFamily};
  font-weight: ${typography.fontWeightLight};
  font-size: ${rem(32)};
  line-height: ${rem(42)};
  color: ${({ color }) => color};
  ${({ disableFocusOutline }) =>
    disableFocusOutline && `&:focus {outline: none;}`}

  @media (max-width: ${BREAKPOINTS.TABLET_PORTRAIT}px) {
    font-size: ${rem(26)};
    line-height: ${rem(36)};
  }
  ${({ elementStyle }) => elementStyle}
`;

export const H3 = styled.h3`
  font-family: ${typography.fontFamily};
  font-weight: ${typography.fontWeightLight};
  font-size: ${rem(22)};
  line-height: ${rem(32)};
  color: ${({ color }) => color};
  ${({ disableFocusOutline }) =>
    disableFocusOutline && `&:focus {outline: none;}`}
  ${({ elementStyle }) => elementStyle}
`;

export const H4 = styled.h4`
  font-family: ${typography.fontFamily};
  font-weight: ${typography.fontWeightLight};
  font-size: ${rem(18)};
  line-height: ${rem(26)};
  color: ${({ color }) => color};
  ${({ disableFocusOutline }) =>
    disableFocusOutline && `&:focus {outline: none;}`}
  ${({ elementStyle }) => elementStyle}
`;

export const I = styled.span`
  font-family: ${typography.fontFamilySerif};
  font-style: italic;
  ${({ disableFocusOutline }) =>
    disableFocusOutline && `&:focus {outline: none;}`}
  ${({ elementStyle }) => elementStyle}
`;

export const P = styled.p`
  font-family: ${typography.fontFamily};
  color: ${({ color }) => color};
  font-size: ${typography.fontSize};
  font-weight: ${({ weight }) => weight};
  line-height: ${typography.lineHeight};
  ${({ disableFocusOutline }) =>
    disableFocusOutline && `&:focus {outline: none;}`}
  ${({ elementStyle }) => elementStyle}
`;

export const Small = styled.small`
  font-family: ${typography.fontFamily};
  color: ${({ color }) => color};
  font-size: ${typography.fontSizeSmall};
  line-height: ${rem(20)};
  ${({ disableFocusOutline }) =>
    disableFocusOutline && `&:focus {outline: none;}`}
  ${({ elementStyle }) => elementStyle}
`;
