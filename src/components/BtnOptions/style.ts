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
