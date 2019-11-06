import styled, { css } from 'styled-components';

export const CardHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  position: relative;
`;

export const ActionsWrapper = styled.a``;

export const CardBody = styled.div`
  display: flex;
  align-items: flex-end;
`;

interface ICountProps {
  type: string;
}

export const Count = styled.div<ICountProps>`
  margin-right: 0.5rem;
  font-size: 2.4rem;
  ${({ theme, type }) =>
    type === 'overall'
      ? css`
          color: ${theme.stats.count.overall.color};
        `
      : type === 'unread'
      ? css`
          color: ${theme.stats.count.read.color};
        `
      : null}
`;

export const Period = styled.div`
  color: ${({ theme }) => theme.stats.period.color};
`;
