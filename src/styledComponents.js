import styled from 'styled-components';
import { BREAKPOINTS } from '@manulife/mux';

export const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin-left: ${({ isSideNavOpen }) => (isSideNavOpen ? '430px' : '80px')};
  @media (max-width: ${BREAKPOINTS.MAX_1024}px) {
    margin: 60px 0 0;
  }
`;
LayoutContainer.displayName = 'LayoutContainer';

export const LayoutContent = styled.div`
  flex: 1 0 auto;
  overflow: hidden;
  background-color: #fafafa;
  padding: 2rem;
`;
LayoutContent.displayName = 'LayoutContent';
