import React from 'react';

import {
  Container,
  UserProfile,
  Menu,
  Home,
  Analitico,
  Historico,
  Configuracoes,
  Logout,
} from './style';

const SideBar: React.FC = () => (
  <Container>
    <UserProfile />

    <Menu>
      <Home />
      <Analitico />
      <Historico />
      <Configuracoes />

      <Logout />
    </Menu>
  </Container>
);

export default SideBar;
