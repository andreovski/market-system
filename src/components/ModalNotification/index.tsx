import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { NotificationIcon, useStyles, style } from './style';

export default function ModalNotification(): any {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = (): any => {
    setOpen(prev => !prev);
  };

  const handleClickAway = (): any => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.root}>
        <IconButton aria-label="notif" color="inherit" onClick={handleClick}>
          <Badge badgeContent={27} color="secondary">
            <NotificationIcon />
          </Badge>
        </IconButton>
        {open ? (
          <div className={classes.dropdown}>
            <List style={style.root}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText />
              </ListItem>
              <Divider variant="inset" component="li" style={style.li} />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                </ListItemAvatar>
                <ListItemText />
              </ListItem>
              <Divider variant="inset" component="li" style={style.li} />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </ListItemAvatar>
                <ListItemText />
              </ListItem>
            </List>
          </div>
        ) : null}
      </div>
    </ClickAwayListener>
  );
}
