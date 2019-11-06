import styled from 'styled-components';

export const Wrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.header.border.color};
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
`;
