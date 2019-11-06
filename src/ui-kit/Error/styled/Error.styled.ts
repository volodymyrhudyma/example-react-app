import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.error.backgroundColor};
  color: ${({ theme }) => theme.error.color};
`;
