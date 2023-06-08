import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #424559;
  width: 100%;
  height: 40px;
`;

const Header = () => (
  <header style={{ zIndex: 2 }}>
    <Nav />
  </header>
);

export default Header;
