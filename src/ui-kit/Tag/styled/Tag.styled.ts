import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-block;
  background-color: ${({ theme }) => theme.tag.backgroundColor};
  border-radius: ${({ theme }) => theme.tag.borderRadius};
  padding: 0.75rem 1rem;
  font-size: ${({ theme }) => theme.tag.fontSize};
  margin-right: 0.5rem;
  margin-top: 0.5rem;
`;
