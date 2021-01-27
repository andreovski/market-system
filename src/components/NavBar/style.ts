import styled from 'styled-components';

import * as IconSolid from '@styled-icons/ionicons-solid';
import * as IconOutline from '@styled-icons/ionicons-outline';

export const Container = styled.div`
  grid-area: NAVBAR;

  display: flex;
  align-items: center;

  > div {
    display: flex;
  }

  > div:first-child {
    width: 90%;
    justify-content: center;
  }

  > div:last-child {
    width: 10%;
    justify-content: start;
  }
`;

export const Search = styled.div`
  display: flex;
  flex-direction: row;

  width: 420px;
  height: 46px;

  background: var(--elem_white);
  border-radius: 6px;

  box-shadow: 0px 3px 5px -2px rgba(0, 0, 0, 0.1);

  > input {
    background-color: var(--elem_white);
    margin-left: 24px;

    font-size: 1.2rem;
  }
`;

export const SearchIcon = styled(IconSolid.Search)`
  width: 30px;
  height: 30px;

  justify-content: center;
  align-items: center;

  margin-top: 8px;
  margin-left: 12px;

  color: var(--light_grey);
`;

export const Notification = styled.div`
  width: 56px;
  height: 46px;

  padding: 8px 13px;

  background-color: var(--background-default);
  border-radius: 6px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  cursor: pointer;
`;

export const NotificationIcon = styled(IconOutline.Notifications)`
  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--dark_grey);
`;
