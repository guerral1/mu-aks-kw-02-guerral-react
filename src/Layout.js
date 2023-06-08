import { LayoutContainer, LayoutContent } from "./styledComponents";
import { Header, SideNav, Footer } from "./components";

const Layout = ({ children }) => (
  <div>
    <Header />
    <SideNav />
    <LayoutContainer>
      <LayoutContent>{children}</LayoutContent>
      <Footer />
    </LayoutContainer>
  </div>
);

export default Layout;
