import React from 'react';
import styled from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #1C1C1E;
  border-bottom: 1px solid #3A3A3C;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s ease, border-color 0.3s ease;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #0A84FF;
`;

const Main = styled.main`
  flex: 1;
  padding: 1rem;
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header>
        <Logo>Blog Writer</Logo>
      </Header>
      <Main>{children}</Main>
    </LayoutContainer>
  );
};

export default Layout;