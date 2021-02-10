import React from 'react';

import BoxHistoric from '../BoxHistoric/Index';

import {
  Container,
  SaleArea,
  TotalGerado,
  IndicatorsArea,
  Conversao,
  TotalRecebido,
  HistoryArea,
  EyeIcon,
  SectionTitle,
} from './style';

const Indices: React.FC = () => (
  <Container>
    <SaleArea>
      <TotalGerado>
        <div>
          <span> Total gerado </span>
        </div>
        <div id="TotalGeradoBody">
          <p>R$</p>
          <span>- 1,486</span>
          <EyeIcon />
        </div>
      </TotalGerado>
      <Conversao>
        <div>
          <span> Conversão </span>
        </div>
        <div id="ConversaoBody">
          <span />
          <span>
            50
            <p>%</p>
          </span>
          <EyeIcon />
        </div>
      </Conversao>
      <TotalRecebido>
        <div>
          <span> Total recebido </span>
        </div>
        <div id="TotalRecebidoBody">
          <p>R$</p>
          <span>850,00</span>
          <EyeIcon />
        </div>
      </TotalRecebido>
    </SaleArea>

    <IndicatorsArea>
      <div>
        <span>Indicadores</span>
        <div>
          <span>7 Dias</span>
          <span>30d</span>
          <span>90d</span>
          <span>360d</span>
        </div>
      </div>
    </IndicatorsArea>

    <HistoryArea>
      <div>
        <SectionTitle>Últimos consumidores</SectionTitle>
      </div>

      <div>
        <BoxHistoric tag="Alimentos" />
      </div>
    </HistoryArea>
  </Container>
);

export default Indices;
