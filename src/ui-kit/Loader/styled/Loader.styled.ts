import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`;

export const StyledLoader = styled.div`
  width: 46px;
  height: 46px;

  &:after {
    content: ' ';
    display: block;
    width: 33px;
    height: 33px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid ${({ theme }) => theme.loader.color};
    border-color: ${({ theme }) => theme.loader.color} transparent
      ${({ theme }) => theme.loader.color} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
