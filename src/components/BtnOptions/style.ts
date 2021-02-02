import styled from 'styled-components';

import * as IconSolid from '@styled-icons/ionicons-solid';

export const Container = styled.div`
  position: fixed;
  bottom: 50px;
  right: 5%;
`;
export const Button = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;
export const ExpandIcon = styled(IconSolid.AddCircle)`
  color: var(--primary);
  cursor: pointer;
`;

export const ModalOptions = styled.div`
  width: 65px;
  height: 174px;

  background-color: var(--elem_white);

  border-radius: 34.5px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  align-items: center;

  > svg {
    color: var(--primary);
    width: 40px;
    height: 40px;
  }
`;
export const AddClientIcon = styled(IconSolid.PersonAdd)`
  cursor: pointer;
`;
export const CartIcon = styled(IconSolid.Cart)`
  cursor: pointer;
`;
