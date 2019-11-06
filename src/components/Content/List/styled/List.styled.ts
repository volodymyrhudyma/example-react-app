import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const LineWrapper = styled.div`
  margin-top: 1rem;
`;

export const ListHeading = styled.div`
  margin-bottom: 3rem;
`;

interface IListBodyProps {
  flex: boolean;
}

export const ListBody = styled.div<IListBodyProps>`
  width: 100%;

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-wrap: wrap;
    `}
`;
