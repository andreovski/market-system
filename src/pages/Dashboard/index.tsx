import React from 'react';

import SideBar from '../../components/SideBar';
import NavBar from '../../components/NavBar';
import Indices from '../../components/Indices';
import BtnOptions from '../../components/BtnOptions';

import { Grid } from './style';

const Dashboard: React.FC = () => (
  <>
    <Grid>
      <SideBar />
      <NavBar />
      <Indices />
      <BtnOptions />
    </Grid>
  </>
);

export default Dashboard;
