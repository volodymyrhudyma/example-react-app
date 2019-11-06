import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  margin-right: 1rem;
`;

export const StyledInput = styled.input`
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.input.fontSize};
  width: ${({ theme }) => theme.input.width};
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.input.placeholder.color};
  }
  :-moz-placeholder {
    color: ${({ theme }) => theme.input.placeholder.color};
  }
  ::-moz-placeholder {
    color: ${({ theme }) => theme.input.placeholder.color};
  }
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.input.placeholder.color};
  }
`;
