import React, { useState } from 'react';
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

export default function Main() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <LeftDrawer setOpen={setOpen} />
        <Note open={open} />
      </div>
    </>
  );
}
