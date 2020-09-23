import React, { useEffect, useState, useRef } from 'react';
import { FiBook } from 'react-icons/fi';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      height: '40px',
    },
    style: {
      color: 'rgb(136,141,144)',
      margin: '5px 10px',
      padding: '3px 6px',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: 'rgb(235,235,235)',
        borderRadius: '5px',
      },
    },
    icon: {
      marginRight: '5px',
      verticalAlign: 'middle',
    },
    title: {
      verticalAlign: 'middle',
    },
  })
);

export default function EditorTitle(props: any) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={classes.style}>
        <FiBook className={classes.icon} />
        <span className={classes.title}>
          {props.notebooks[props.notebook].title}
        </span>
      </span>
    </div>
  );
}
