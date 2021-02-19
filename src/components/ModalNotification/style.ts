import styled from 'styled-components';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import * as IconOutline from '@styled-icons/ionicons-outline';

export const NotificationIcon = styled(IconOutline.Notifications)`
  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--dark_grey);

  > button {
    border-radius: 6px !important;
  }
`;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
    },
    dropdown: {
      position: 'absolute',
      top: 55,
      right: 0,
      zIndex: 1,
      borderRadius: '6px',
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
      width: '350px',
      minHeight: '203px',
      boxShadow: '0px 3px 5px -2px rgba(0, 0, 0, 0.1)',
    },
  }),
);

export const style = {
  root: {
    width: '100%',
  },
  inline: {
    display: 'inline',
  },
  li: {
    width: '320px',
    margin: 'auto',
  },
};
