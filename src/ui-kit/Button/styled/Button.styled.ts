import styled from 'styled-components';

export const Wrapper = styled.button`
  color: ${({ theme }) => theme.button.color};
  background-color: ${({ theme }) => theme.button.backgroundColor};
  font-size: ${({ theme }) => theme.button.fontSize};
  padding: 0.75rem 1rem;
  min-width: ${({ theme }) => theme.button.minWidth};
  border: none;
  outline: none;
  cursor: pointer;
`;
