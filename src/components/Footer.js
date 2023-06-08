import styled from "styled-components";
import typography from "../typography/typography";
import { BREAKPOINTS, rem } from "../utils";
import reverse from "../assets/images/reverse.svg";

const FooterWrapper = styled.footer`
  z-index: 3;
  position: relative;
  bottom: 0px;
  left: 0px;
  right: 0px;
  padding: 30px;
  background-color: #282b3e;
  color: #fff;
  font-family: ${typography.fontFamily};
  font-weight: 300;
  font-size: ${rem(13)};
  line-height: ${rem(20)};
  & > div {
    display: flex;
    flex-wrap: wrap;
    margin: 0px;
  }
  @media (min-width: ${BREAKPOINTS.MAX_768}px) and (max-width: ${BREAKPOINTS.MAX_1024}px) {
    min-width: 688px;
    overflow: hidden;
  }
  @media (max-width: ${BREAKPOINTS.MAX_768}px) {
    font-size: ${rem(13)};
    line-height: ${rem(26)};
  }
  @media (max-width: ${BREAKPOINTS.PHONE_PORTRAIT_LG}px) {
    max-width: ${BREAKPOINTS.PHONE_PORTRAIT_LG}px;
  }
  @media (max-width: ${BREAKPOINTS.PHONE_PORTRAIT_MED}px) {
    max-width: ${BREAKPOINTS.PHONE_PORTRAIT_MED}px;
  }
  @media (max-width: ${BREAKPOINTS.PHONE_PORTRAIT_SM}px) {
    max-width: ${BREAKPOINTS.PHONE_PORTRAIT_SM}px;
  }
`;

const FooterMiddle = styled.div`
  min-height: 20px;
  margin: 0 0 16px 0;
  padding: 0px;
  font-size: ${typography.fontSizeSmall};
  width: 100%;
  color: #fff;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  @media (max-width: ${BREAKPOINTS.MAX_1024}px) {
    flex-flow: column nowrap;
  }
`;

const FooterBottom = styled.div`
  width: 100%;
  border-top: 1px solid #34384b;
  padding-top: 30px;
  font-size: ${rem(13)};
  display: flex;
  align-items: flex-start;
  & > span {
    color: #C2C3C9;
    margin-left: 40px;
  }
  @media (max-width: ${BREAKPOINTS.MAX_768}px) {
    flex-direction: column;
    margin: 0px auto 10px auto;
    width: 100%;
    & > span {
      display: block;
      margin-left: 0;
      margin-top: 20px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterMiddle />
      <FooterBottom>
        <img style={{ height: "20px" }} src={reverse} alt="reverse" />

        <span>
          © 1999-{new Date().getFullYear()} The Manufacturers Life Insurance
          Company
        </span>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
