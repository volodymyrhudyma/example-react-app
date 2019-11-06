import styled from 'styled-components';

interface IWrapperProps {
  width: string;
  height: string;
}

export const Wrapper = styled.div<IWrapperProps>`
  background: ${({ theme }) => theme.line.color};
  border-radius: ${({ theme }) => theme.line.borderRadius};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
