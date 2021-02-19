import React from 'react';
import ModalNotification from '../ModalNotification';

import { Container, Search, SearchIcon, Notification } from './style';

const NavBar: React.FC = () => (
  <Container>
    <div>
      <Search>
        <SearchIcon />
        <input type="text" placeholder="Pesquise por algo..." />
      </Search>
    </div>
    <div>
      <Notification>
        <ModalNotification />
      </Notification>
    </div>
  </Container>
);

export default NavBar;
