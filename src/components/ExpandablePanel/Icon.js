import React from "react";
import styled from "styled-components";

export const ManulifeRoot = styled.span`
  svg {
    vertical-align: middle;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    path,
    polygon,
    rect {
      stroke: ${({ color }) => color};
      fill: ${({ fill }) => fill};
    }
    .manulifeIconSecondary-fill {
      fill: ${({ secondaryColor }) => secondaryColor};
      stroke: none;
    }
    .manulifeIconSecondary-stroke {
      stroke: ${({ secondaryColor }) => secondaryColor};
      fill: none;
    }
    opacity: ${({ opacity }) => opacity};
  }
`;

/*eslint-disable */
export default ({
  alt,
  manulifeName,
  color = "inherit",
  fill,
  secondaryColor = "none",
  ariaHidden,
  width,
  height,
  opacity,
}) => (
  <ManulifeRoot
    color="#000"
    fill={fill}
    secondaryColor={secondaryColor}
    width={width || rem(MANULIFE_ICON_SIZE_DEFAULT)}
    height={height || rem(MANULIFE_ICON_SIZE_DEFAULT)}
    aria-hidden={ariaHidden}
    data-icon={manulifeName}
    opacity={opacity}
  >
    <svg
      width="20px"
      height="20px"
      focusable="false"
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <g stroke="none" strokeWidth="0" fill="none" fillRule="evenodd">
        <circle
          fillRule="nonzero"
          cx="10"
          cy="10"
          r="10"
          className="manulifeIconSecondary-fill"
        />
        <polygon fillRule="nonzero" points="14 9 14 11 6 11 6 9" />
        <polygon fillRule="nonzero" points="9 6 11 6 11 14 9 14" />
      </g>
    </svg>
  </ManulifeRoot>
);
