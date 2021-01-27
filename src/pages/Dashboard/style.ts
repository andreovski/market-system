import styled from 'styled-components';

export const Grid = styled.div`
  // SIDEBAR
  // NAVBAR
  // INDICES
  // HISTORICO

  display: grid;

  grid-template-columns: 116px auto;
  grid-template-rows: 90px 705px auto;

  grid-template-areas:
    'SIDEBAR NAVBAR'
    'SIDEBAR INDICES'
    'SIDEBAR HISTORICO';

  height: 100%;
`;
