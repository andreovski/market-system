import React from 'react';

import {
  Container,
  Button,
  ExpandIcon,
  ModalOptions,
  AddClientIcon,
  CartIcon,
} from './style';

const BtnOptions: React.FC = () => (
  <Container>
    <ModalOptions>
      <AddClientIcon />
      <CartIcon />
    </ModalOptions>
    <Button>
      <ExpandIcon />
    </Button>
  </Container>
);

export default BtnOptions;
