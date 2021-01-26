import React from 'react';

import SideBar from '../../components/SideBar';
import NavBar from '../../components/NavBar';

import { Grid } from './style';

const Dashboard: React.FC = () => (
  <>
    <Grid>
      <SideBar />
      <NavBar />
    </Grid>
  </>
);

export default Dashboard;
