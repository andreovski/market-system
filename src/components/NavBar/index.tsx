import React from 'react';

import { Container, Search, Notification } from './style';

const NavBar: React.FC = () => (
  <Container>
    <Search />
    <div>
      <Notification />
    </div>
  </Container>
);

export default NavBar;
