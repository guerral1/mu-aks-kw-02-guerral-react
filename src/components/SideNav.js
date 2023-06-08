import { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../logo.svg";

const SIDE_NAV_TOP = "40px";

const Nav = styled.nav`
  height: 100vh;
  width: 80px;
  background-color: #424559;
  z-index: 4;
  position: ${({ isSticky }) => (isSticky ? "fixed" : "absolute")};
  top: ${({ isSticky }) => (isSticky ? "0" : SIDE_NAV_TOP)};
`;

const SideNav = () => {
  const sideNavHeaderPosition = Number.parseInt(SIDE_NAV_TOP, 10);
  const [isSticky, setSticky] = useState(sideNavHeaderPosition === 0);

  useEffect(() => {
    const handleScroll = () => {
      sideNavHeaderPosition && window.scrollY <= sideNavHeaderPosition
        ? setSticky(false)
        : setSticky(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Nav isSticky={isSticky}>
      <img src={logo} alt="logo" />
    </Nav>
  );
};

export default SideNav;
