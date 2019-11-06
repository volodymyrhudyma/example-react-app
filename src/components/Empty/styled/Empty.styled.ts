import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.empty.backgroundColor};
  color: ${({ theme }) => theme.empty.color};
`;
