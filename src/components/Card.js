import styled from "styled-components";
import typography from "../typography/typography";

export const Card = styled.div`
  font-family: ${typography.fontFamily};
  line-height: ${typography.lineHeight};
  background: #fff;
  border: 1px solid #ededed;
  width: 100%;
  color: #1e212f;
  text-align: ${({ centered }) => (centered ? "center" : "inherit")};
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

export const CardHeader = styled.div`
  padding: 20px 20px 10px 20px;
  font-weight: 600;
  font-size: ${({ fontSize }) => fontSize};
  line-height: 1.4;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: 20px;
    bottom: 0px;
    background-color: #00a758;
    height: 3px;
    width: 32px;
  }
`;

export const CardContent = styled.div`
  padding: 20px;
  font-weight: 300;
  flex: 1 1 auto;

  p:first-child {
    margin-top: 0;
  }
  p:last-child {
    margin-bottom: 0;
  }
`;
