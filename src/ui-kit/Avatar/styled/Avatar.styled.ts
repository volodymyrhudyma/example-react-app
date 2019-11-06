import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

interface IStyledImageProps {
  width: number;
  height: number;
}

export const StyledImage = styled.img<IStyledImageProps>`
  border-radius: 50%;
  width: ${({ width }) => `${width}px`}
  height: ${({ height }) => `${height}px`}
`;
