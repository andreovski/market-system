import styled from 'styled-components';

import {
  Home,
  StatsChart,
  Time,
  Settings,
  LogOut,
} from '@styled-icons/ionicons-outline';

export const Container = styled.div`
  grid-area: SIDEBAR;

  height: 100vh;
  position: fixed;

  background-color: var(--primary);

  padding: 30px 30px;
`;

export const UserProfile = styled.div`
  width: 64px;
  height: 64px;

  background-color: var(--elem_white);
  border-radius: 6px;
`;

export const Menu = styled.div`
  display: flex;

  flex-direction: column;

  margin-top: 63px;
  align-items: center;

  > svg {
    width: 45px;
    height: 45px;

    margin-bottom: 4vh;

    color: var(--elem_white);
  }
`;

export const HomeIcon = styled(Home)``;

export const AnaliticoIcon = styled(StatsChart)``;

export const HistoricoIcon = styled(Time)``;

export const ConfiguracoesIcon = styled(Settings)``;

export const LogoutIcon = styled(LogOut)`
  position: absolute;

  bottom: 0px;
`;
