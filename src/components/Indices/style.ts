import styled from 'styled-components';
import * as IconSolid from '@styled-icons/ionicons-solid';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: INDICES;

  align-items: center;
  font-family: 'Poppins', sans-serif;
`;
export const SaleArea = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

  width: 1024px;
  height: 180px;
`;
export const TotalGerado = styled.div`
  width: 320px;
  height: 100%;

  background-color: var(--elem_white);

  border-radius: 6px;

  > div:first-child {
    background-color: var(--elem_red);

    display: flex;
    justify-content: center;
    align-items: center;

    width: 320px;
    height: 33%;

    border-radius: 6px 6px 0px 0px;

    > span {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--elem_white);
    }
  }
  #TotalGeradoBody {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 67%;

    > p {
      font-size: 1.5rem;
    }
    > span {
      font-size: 2.5rem;
    }
  }
`;
export const EyeIcon = styled(IconSolid.Eye)`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
export const Conversao = styled.div`
  width: 320px;
  height: 100%;

  background-color: var(--elem_white);

  border-radius: 6px;

  > div:first-child {
    background-color: var(--elem_blue);

    display: flex;
    justify-content: center;
    align-items: center;

    width: 320px;
    height: 33%;

    border-radius: 6px 6px 0px 0px;

    > span {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--elem_white);
    }
  }
  #ConversaoBody {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 67%;

    > span {
      display: flex;
      align-items: center;
      font-size: 2.5rem;

      > p {
        font-size: 1.5rem;
        font-weight: 500;
      }
    }
  }
`;
export const TotalRecebido = styled.div`
  width: 320px;
  height: 100%;

  background-color: var(--elem_white);

  border-radius: 6px;

  > div:first-child {
    background-color: var(--elem_green);

    display: flex;
    justify-content: center;
    align-items: center;

    width: 320px;
    height: 33%;

    border-radius: 6px 6px 0px 0px;

    > span {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--elem_white);
    }
  }
  #TotalRecebidoBody {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 67%;

    > p {
      font-size: 1.5rem;
    }
    > span {
      font-size: 2.5rem;
    }
  }
`;
export const IndicatorsArea = styled.div``;
export const HistoryArea = styled.div``;
