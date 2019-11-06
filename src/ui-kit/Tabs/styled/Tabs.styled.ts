import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.tabs.wrapper.backgroundColor};
  border-radius: ${({ theme }) => theme.tabs.wrapper.borderRadius};
`;

export const Label = styled.div`
  color: ${({ theme }) => theme.tabs.label.color};
`;

interface ITabItemProps {
  isActive: boolean;
}

export const TabItem = styled.div<ITabItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${({ theme }) => theme.tabs.tab.active.backgroundColor};
      box-shadow: ${({ theme }) => theme.tabs.tab.active.boxShadow};
      border-radius: ${({ theme }) => theme.tabs.tab.active.borderRadius};
    `}
`;

export const IconWrapper = styled.div`
  display: flex;
  margin-right: 1rem;
`;
