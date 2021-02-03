import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

import * as IconOutline from '@styled-icons/ionicons-outline';
import * as IconSolid from '@styled-icons/ionicons-sharp';

export const Container = styled.div`
  grid-area: SIDEBAR;

  height: 100vh;
  position: fixed;

  background-color: var(--primary);

  padding: 26px 26px;
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

  > div {
    display: flex;

    width: 64px;
    height: 64px;
    background-color: transparent;
    border-radius: 6px;

    place-content: center;

    margin-bottom: 2.5vh;

    transition: 0.2s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      transition: background-color 0.2s;
    }

    > svg {
      width: 45px;
      height: 45px;

      margin: auto;

      color: var(--elem_white);
      cursor: pointer;
    }
  }

  > div:last-child {
    position: absolute;

    bottom: 20px;
  }
`;

export const StyledReactTooltip = styled(ReactTooltip)`
  border-radius: 6px !important;
`;

export const HomeIcon = styled(IconSolid.Home)``;

export const AnaliticoIcon = styled(IconOutline.StatsChart)``;

export const HistoricoIcon = styled(IconOutline.Time)``;

export const ConfiguracoesIcon = styled(IconOutline.Settings)``;

export const LogoutIcon = styled(IconOutline.LogOut)``;
