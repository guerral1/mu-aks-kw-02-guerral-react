import React from 'react';
import { UtilityHeader, SideNav, Footer } from '@manulife/mux';
import { LayoutContainer, LayoutContent } from './styledComponents';

function Layout({ children }) {
  return (
    <>
      <UtilityHeader />
      <SideNav mobileHeaderToggle />
      <LayoutContainer>
        <LayoutContent>{children}</LayoutContent>
        <Footer />
      </LayoutContainer>
    </>
  );
}

export default Layout;
