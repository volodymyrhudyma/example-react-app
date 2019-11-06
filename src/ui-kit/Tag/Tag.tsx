import React, { ReactNode } from 'react';
import { Wrapper } from './styled/Tag.styled';

interface ITagProps {
  children: ReactNode;
}

const Tag = (props: ITagProps) => <Wrapper {...props} />;

export default Tag;
