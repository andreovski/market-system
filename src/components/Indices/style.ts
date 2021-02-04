import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: INDICES;

  align-items: center;
`;
export const SaleArea = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

  background-color: white;

  width: 1024px;
  height: 180px;

  > div {
    justify-content: center;
    display: flex;

    width: 320px;
    height: 180px;
    > span {
      font-size: 2rem;
    }
  }
`;
export const TotalGerado = styled.div`
  justify-content: center;
`;
export const Conversao = styled.div`
  justify-content: center;
`;
export const TotalRecebido = styled.div``;
export const IndicatorsArea = styled.div``;
export const HistoryArea = styled.div``;
