import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/styles';
import { useStyles, theme } from './style';

export function BoxHistoric(): any {
  const classes = useStyles();

  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        <div className={classes.root}>
          <div className={classes.section1}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={4}>
                <Avatar className={classes.large}>AT</Avatar>
              </Grid>
              <Grid item xs={8} alignItems="center">
                <Typography gutterBottom variant="h5">
                  Alex Turner
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div className={classes.section2}>
            <Grid
              container
              xs={12}
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Typography gutterBottom variant="h5">
                R$4.50
              </Typography>
            </Grid>
          </div>
          <div className={classes.section3}>
            <ThemeProvider theme={theme}>
              <Grid
                container
                xs={12}
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Chip
                  className={classes.chip}
                  color="secondary"
                  label="Alimentos"
                />
                <Chip
                  className={classes.chip}
                  color="primary"
                  label="Higiene"
                />
                <Chip
                  className={classes.chip}
                  color="secondary"
                  label="Limpeza"
                />
              </Grid>
            </ThemeProvider>
          </div>
        </div>
        <div className={classes.root}>
          <div className={classes.section1}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={4}>
                <Avatar className={classes.large}>AT</Avatar>
              </Grid>
              <Grid item xs={8} alignItems="center">
                <Typography gutterBottom variant="h5">
                  Alex Turner
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div className={classes.section2}>
            <Grid
              container
              xs={12}
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Typography gutterBottom variant="h5">
                R$4.50
              </Typography>
            </Grid>
          </div>
          <div className={classes.section3}>
            <Grid
              container
              xs={12}
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Chip className={classes.chip} label="Alimentos" />
              <Chip className={classes.chip} color="primary" label="Higiene" />
              <Chip className={classes.chip} label="Limpeza" />
            </Grid>
          </div>
        </div>
        <div className={classes.root}>
          <div className={classes.section1}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={4}>
                <Avatar className={classes.large}>AT</Avatar>
              </Grid>
              <Grid item xs={8} alignItems="center">
                <Typography gutterBottom variant="h5">
                  Alex Turner
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div className={classes.section2}>
            <Grid
              container
              xs={12}
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Typography gutterBottom variant="h5">
                R$4.50
              </Typography>
            </Grid>
          </div>
          <div className={classes.section3}>
            <Grid
              container
              xs={12}
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Chip className={classes.chip} label="Alimentos" />
              <Chip className={classes.chip} color="primary" label="Higiene" />
              <Chip className={classes.chip} label="Limpeza" />
            </Grid>
          </div>
        </div>
      </Grid>
    </>
  );
}

export default BoxHistoric;
