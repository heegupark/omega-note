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
    date: {
      position: 'absolute',
      float: 'right',
      fontSize: '12px',
      top: '10px',
      right: '20px',
    },
  })
);

export default function EditorTitle(props: any) {
  const classes = useStyles();
  let updateAt = null;
  props.notebooks[props.notebook].notes.map((note: any) => {
    if (note.id === props.currentNote) {
      updateAt = note.updatedAt;
    }
  });
  return (
    <div className={classes.root}>
      <span className={classes.style}>
        <FiBook className={classes.icon} />
        <span className={classes.title}>
          {props.notebooks[props.notebook].title}
        </span>
        {props.currentNote && (
          <span className={classes.date}>
            {'Last edited on '}
            {props.formatDate(updateAt)}
          </span>
        )}
      </span>
    </div>
  );
}
