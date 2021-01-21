import React from 'react';

import {
  Container,
  UserProfile,
  Menu,
  HomeIcon,
  AnaliticoIcon,
  HistoricoIcon,
  ConfiguracoesIcon,
  LogoutIcon,
} from './style';

const SideBar: React.FC = () => (
  <Container>
    <UserProfile />

    <Menu>
      <HomeIcon />
      <AnaliticoIcon />
      <HistoricoIcon />
      <ConfiguracoesIcon />

      <LogoutIcon />
    </Menu>
  </Container>
);

export default SideBar;
