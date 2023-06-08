import styled from "styled-components";

export const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin-left: 80px;
`;
LayoutContainer.displayName = "LayoutContainer";

export const LayoutContent = styled.div`
  flex: 1 0 auto;
  overflow: hidden;
  background-color: #fafafa;
  padding: 1rem 2rem;
`;
LayoutContent.displayName = "LayoutContent";
