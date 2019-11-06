import styled from 'styled-components';

interface IWrapperProps {
  width: string;
  height: string;
  padding: string;
}

export const Wrapper = styled.div<IWrapperProps>`
  padding: ${({ padding }) => padding};
  box-shadow: ${({ theme }) => theme.card.boxShadow};
  border-radius: ${({ theme }) => theme.card.borderRadius};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ theme }) => theme.card.backgroundColor};
  box-sizing: border-box;
`;
