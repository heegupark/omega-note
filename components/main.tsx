import React from 'react';
// import Disclaimer from './disclaimer';
import LeftDrawer from './left-drawer';
import Note from './note';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
  })
);

export default function Main(props: any) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <LeftDrawer />
        <Note />
      </div>
    </>
  );
}
