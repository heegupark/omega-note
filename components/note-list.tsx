import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box } from '@chakra-ui/core';

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
      backgroundColor: 'rgb(248, 248, 248)',
      padding: '10px',
      height: '100vh',
      resize: 'horizontal',
      minWidth: '200px',
      width: '300px',
      maxWidth: '400px',
      overflow: 'hidden',
      borderRight: '1px solid rgb(230, 230, 230)',
    },
    handle: {
      width: '3px',
      backgroundColor: 'black',
      cursor: 'ew-resize',
    },
  })
);

export default function NoteList() {
  const classes = useStyles();
  const listBoxRef = React.createRef();

  return (
    <div className={classes.root}>
      <div className={classes.box}>
        <span>Contents</span>
      </div>
      <div>
        <span>Contents2</span>
      </div>
    </div>
  );
}
