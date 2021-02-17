import styled from 'styled-components';
import * as IconSolid from '@styled-icons/ionicons-solid';
import {
  makeStyles,
  createStyles,
  Theme,
  createMuiTheme,
} from '@material-ui/core/styles';

export const AddClient = styled(IconSolid.PersonAdd)`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const CartIcon = styled(IconSolid.Cart)`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 380,
      transform: 'translateZ(0px)',
      flexGrow: 1,
      position: 'fixed',
      right: '5%',
      bottom: '50px',
    },
    speedDial: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }),
);

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#23A2CD',
    },
  },
});
