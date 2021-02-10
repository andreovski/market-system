import React from 'react';

import { Container, Avatar, Name, Value, Tag, ExpandButton } from './style';

interface Props {
  tag: string;
}

const BoxHistoric: React.FC<Props> = ({ tag }: Props) => (
  <Container>
    <Avatar />

    <Name />
    <Value />
    <Tag>
      <p>{tag}</p>
    </Tag>
    <ExpandButton />
  </Container>
);

export default BoxHistoric;
