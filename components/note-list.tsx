import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDdirection: 'row',
      height: '100vh',
    },
    box: {
      display: 'flex',
      flexDdirection: 'column',
      background: '#ccc',
      padding: '10px',
      boxSizing: 'border-box',
      position: 'relative',
      overflowY: 'hidden',
      resize: 'horizontal',
      height: '100vh',
      width: '100%',
    },
    handle: {
      width: '3px',
      borderRight: '1px solid black',
      cursor: 'ew-resize',
    },
  })
);

export default function NoteList(props: any) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.box}>
        <span>Contents</span>
      </div>
      <div
        className={classes.handle}
        onDrag={(e: any) => {
          console.log(e.clientX);
        }}
      ></div>
    </div>
  );
}
