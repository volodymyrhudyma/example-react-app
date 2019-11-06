import React from 'react';
import styled, { css } from 'styled-components';

interface IWrapperProps {
  component: string;
}

export const Wrapper = styled(({ component, ...props }) =>
  React.createElement(component, props)
)<IWrapperProps>`
  ${({ component }) =>
    component === 'h1' &&
    css`
      font-size: ${({ theme }) => theme.title.h1.fontSize};
    `}

    ${({ component }) =>
      component === 'h4' &&
      css`
        font-size: ${({ theme }) => theme.title.h4.fontSize};
        font-weight: 400;
      `}

  ${({ component }) =>
    component === 'h5' &&
    css`
      font-size: ${({ theme }) => theme.title.h5.fontSize};
      font-weight: 400;
    `}

  ${({ component }) =>
    component === 'h6' &&
    css`
      font-size: ${({ theme }) => theme.title.h6.fontSize};
      font-weight: 400;
    `}
`;
