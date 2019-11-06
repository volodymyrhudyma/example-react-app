import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: ${({ theme }) => theme.container.margin};
  min-width: ${({ theme }) => theme.container.minWidth};
`;
