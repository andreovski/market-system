import styled from 'styled-components';

export const Container = styled.div`
  grid-area: NAVBAR;

  display: flex;
  justify-content: center;
  align-items: center;

  > div:last-child {
    justify-content: end;
  }
`;

export const Search = styled.div`
  width: 420px;
  height: 46px;

  background: var(--elem_white);
  border: 1px solid var(--light_grey);
  border-radius: 6px;

  box-shadow: 0px 3px 5px -2px rgba(0, 0, 0, 0.1);
`;

export const Notification = styled.div`
  width: 56px;
  height: 46px;

  background-color: var(--background-default);
  border: 1px solid #000;
`;
