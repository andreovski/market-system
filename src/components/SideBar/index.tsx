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
  StyledReactTooltip,
} from './style';

const SideBar: React.FC = () => (
  <Container>
    <UserProfile />

    <Menu>
      <div>
        <HomeIcon data-tip data-for="hover-Home" />
        <StyledReactTooltip id="hover-Home" effect="solid" place="right">
          <span>Inicio</span>
        </StyledReactTooltip>
      </div>

      <div>
        <AnaliticoIcon data-tip data-for="hover-Analitico" />
        <StyledReactTooltip id="hover-Analitico" effect="solid" place="right">
          <span>Analítico</span>
        </StyledReactTooltip>
      </div>

      <div>
        <HistoricoIcon data-tip data-for="hover-Historico" />
        <StyledReactTooltip id="hover-Historico" effect="solid" place="right">
          <span>Histórico</span>
        </StyledReactTooltip>
      </div>

      <div>
        <ConfiguracoesIcon data-tip data-for="hover-Configuracoes" />
        <StyledReactTooltip
          id="hover-Configuracoes"
          effect="solid"
          place="right"
        >
          <span>Configurações</span>
        </StyledReactTooltip>
      </div>

      <div>
        <LogoutIcon data-tip data-for="hover-Logout" />
        <StyledReactTooltip id="hover-Logout" effect="solid" place="right">
          <span>Sair</span>
        </StyledReactTooltip>
      </div>
    </Menu>
  </Container>
);

export default SideBar;
