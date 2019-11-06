import styled from 'styled-components';

export const Wrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ theme }) => theme.navbarItem.height};
  border-left: ${({ theme }) => theme.navbarItem.border.size} solid
    ${({ theme }) => theme.navbarItem.border.color};
  margin-bottom: 3rem;
  &.active {
    border-left: ${({ theme }) => theme.navbarItem.active.border.size} solid
      ${({ theme }) => theme.navbarItem.active.border.color};
  }
  &:hover {
    border-left: ${({ theme }) => theme.navbarItem.active.border.size} solid
      ${({ theme }) => theme.navbarItem.active.border.color};
  }
`;

export const IconWrapper = styled.div`
  margin-left: -${({ theme }) => theme.navbarItem.active.border.size};
`;
