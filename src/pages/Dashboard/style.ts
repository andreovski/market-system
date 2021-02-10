import styled from 'styled-components';

export const Grid = styled.div`
  // SIDEBAR
  // NAVBAR
  // INDICES
  // HISTORICO

  display: grid;

  grid-template-columns: 116px auto;
  grid-template-rows: 10vh 90vh;

  grid-template-areas:
    'SIDEBAR NAVBAR'
    'SIDEBAR INDICES'
    'SIDEBAR INDICES';

  height: 100%;
`;
