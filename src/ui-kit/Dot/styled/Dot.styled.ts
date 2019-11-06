import styled from 'styled-components';

export const Wrapper = styled.div`
  width: ${({ theme }) => theme.dot.width};
  height: ${({ theme }) => theme.dot.height};
  background-image: ${({ theme }) => theme.dot.backgroundColor};
  border-radius: ${({ theme }) => theme.dot.borderRadius};
`;
