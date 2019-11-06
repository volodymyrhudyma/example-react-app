import React from 'react';
import { Wrapper, StyledImage } from './styled/Avatar.styled';

interface IAvatarProps {
  src: string;
  width: number;
  height: number;
}

const Avatar = (props: IAvatarProps) => (
  <Wrapper>
    <StyledImage {...props} />
  </Wrapper>
);

Avatar.defaultProps = {
  width: 60,
  height: 60,
};

export default Avatar;
