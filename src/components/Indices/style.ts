import styled from 'styled-components';
import * as IconSolid from '@styled-icons/ionicons-solid';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: INDICES;

  align-items: center;
  font-family: 'Poppins', sans-serif;

  margin-top: 50px;
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
  box-shadow: 0px 3px 5px -2px rgba(0, 0, 0, 0.1);

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
  box-shadow: 0px 3px 5px -2px rgba(0, 0, 0, 0.1);

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
  box-shadow: 0px 3px 5px -2px rgba(0, 0, 0, 0.1);

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
export const IndicatorsArea = styled.div`
  width: 1005px;
  height: 294px;

  margin-top: 25px;

  background-color: var(--elem_white);

  border-radius: 6px;
  box-shadow: 0px 3px 5px -2px rgba(0, 0, 0, 0.1);

  > div:first-child {
    width: 1005px;
    height: 59px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px 6px 0px 0px;

    padding: 0px 32px;

    background-color: var(--elem_blue);

    > span {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--elem_white);
    }

    > div {
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      padding-right: 20px;

      width: 300px;
      height: 40px;

      > span:first-child {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 87px;
        height: 40px;

        border-radius: 6px;

        background-color: var(--primary);
      }
      > span {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 40px;
        height: 40px;

        border-radius: 6px;

        font-size: 0.9rem;
        font-weight: bold;
        color: var(--elem_white);
      }
    }
  }
`;
export const HistoryArea = styled.div``;
