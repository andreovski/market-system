import React from 'react';
import ReactTooltip from 'react-tooltip';

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
      {/* tooltip hover */}
      <AddClientIcon data-tip data-for="hover-addClient" />
      <ReactTooltip id="hover-addClient" effect="solid" place="left">
        <span>Novo cliente</span>
      </ReactTooltip>

      <ReactTooltip id="hover-Cart" effect="solid" place="left">
        <span>Nova compra</span>
      </ReactTooltip>
      <CartIcon data-tip data-for="hover-Cart" />
    </ModalOptions>
    <Button>
      <ExpandIcon />
    </Button>
  </Container>
);

export default BtnOptions;
