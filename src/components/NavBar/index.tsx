import React from 'react';

import {
  Container,
  Search,
  SearchIcon,
  Notification,
  NotificationIcon,
} from './style';

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
        <NotificationIcon />
      </Notification>
    </div>
  </Container>
);

export default NavBar;
