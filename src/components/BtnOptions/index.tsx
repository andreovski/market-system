import React from 'react';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import { ThemeProvider } from '@material-ui/styles';
import { AddClient, CartIcon, useStyles, theme } from './style';

const styles = {
  color: 'white',
};

const actions = [
  { icon: <AddClient />, name: 'Novo cliente' },
  { icon: <CartIcon />, name: 'Nova saída' },
];

export default function SpeedDialTooltipOpen(): any {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  const handleVisibility = (): any => {
    setHidden(prevHidden => !prevHidden);
  };

  const handleOpen = (): any => {
    setOpen(true);
  };

  const handleClose = (): any => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          className={classes.speedDial}
          hidden={hidden}
          icon={<SpeedDialIcon style={styles} />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map(action => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipOpen
              onClick={handleClose}
            />
          ))}
        </SpeedDial>
      </ThemeProvider>
    </div>
  );
}
