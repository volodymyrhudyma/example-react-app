import styled from 'styled-components';

export const Wrapper = styled.div`
  border-right: 1px solid ${({ theme }) => theme.navbar.border.color};
  width: ${({ theme }) => theme.navbar.width};
  min-width: ${({ theme }) => theme.navbar.width};
`;

export const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ theme }) => theme.navbar.logo.height};
  margin-bottom: 5rem;
`;

export const ItemsWrapper = styled.div``;
