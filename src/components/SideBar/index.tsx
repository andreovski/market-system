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
      <div>
        <HomeIcon />
      </div>
      <div>
        <AnaliticoIcon />
      </div>
      <div>
        <HistoricoIcon />
      </div>
      <div>
        <ConfiguracoesIcon />
      </div>

      <div>
        <LogoutIcon />
      </div>
    </Menu>
  </Container>
);

export default SideBar;
