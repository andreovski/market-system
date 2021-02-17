import {
  makeStyles,
  createStyles,
  Theme,
  createMuiTheme,
} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 'auto',
      maxWidth: 360,
      padding: '2px',
      paddingTop: '10px',
      marginTop: '20px',
      margin: theme.spacing(1),
      borderRadius: '6px',
      boxShadow: '0px 3px 5px -2px rgba(0, 0, 0, 0.1)',
      background: '#FAFAFA',
    },
    chip: {
      margin: theme.spacing(0.5),
      borderRadius: '2px',
    },
    section1: {
      margin: theme.spacing(1.2, 4),
    },
    section2: {
      margin: theme.spacing(1),
    },
    section3: {
      margin: theme.spacing(2),
    },
    large: {
      width: theme.spacing(9),
      height: theme.spacing(9),
    },
  }),
);

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#c6ff00',
    },
    secondary: {
      main: '#d500f9',
    },
  },
});
