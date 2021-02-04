import React from 'react';

import {
  Container,
  SaleArea,
  TotalGerado,
  IndicatorsArea,
  Conversao,
  TotalRecebido,
  HistoryArea,
} from './style';

const Indices: React.FC = () => (
  <Container>
    <SaleArea>
      <TotalGerado>
        <div>
          <span> Total gerado </span>
        </div>
      </TotalGerado>
      <Conversao>
        <div>
          <span> Conversão </span>
        </div>
      </Conversao>
      <TotalRecebido>
        <div>
          <span> Total recebido </span>
        </div>
      </TotalRecebido>
    </SaleArea>

    <IndicatorsArea>
      <div />
    </IndicatorsArea>

    <HistoryArea />
  </Container>
);

export default Indices;
