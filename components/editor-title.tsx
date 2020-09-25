import React, { useEffect, useState, useRef } from 'react';
import { FiBook } from 'react-icons/fi';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import INoteProps from './interfaces/inoteprops';
import INote from './interfaces/inote';

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

interface Note {
  id: string;
  noteTitle: string;
  note: string;
  isDeleted: boolean;
  lastNotebook: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Notebook {
  notebooks: {
    [id: string]: {
      id: string;
      title: string;
      notes: Array<Note>;
      createdAt: Date;
      updatedAt: Date;
    };
  };
  notebookOrder: Array<string>;
}

export default function EditorTitle(props: INoteProps) {
  const classes = useStyles();
  let updateAt = new Date();
  props.notebooks[props.notebook].notes.map((note: INote) => {
    if (note.id === props.currentNoteId) {
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
        {props.currentNoteId && (
          <span className={classes.date}>
            {'Last edited on '}
            {props.formatDate(updateAt)}
          </span>
        )}
      </span>
    </div>
  );
}
