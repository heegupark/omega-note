import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CgNotes } from 'react-icons/cg';
import Divider from '@material-ui/core/Divider';
import { DragPreviewImage, useDrag } from 'react-dnd';
import NoteListItem from './note-list-item';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      margin: 'auto',
      color: 'rgb(51,51,51)',
      fontSize: '16px',
      width: '100%',
    },
    title: {
      padding: '10px',
      fontSize: '22px',
    },
    empty: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 'auto',
      textAlign: 'center',
      padding: '35px',
    },
    emptyIcon: {
      fontSize: '75px',
    },
    newNoteText: {
      cursor: 'pointer',
      color: 'rgb(0,168,45)',
    },
  })
);

export default function NoteList(props: any) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>title</div>
      <Divider />
      {props.notebooks[props.notebook].notes.length > 0 ? (
        <>
          {props.notebooks[props.notebook].notes.map((note: any) => {
            return (
              <div key={note.id}>
                <NoteListItem note={note} {...props} />
                <Divider />
              </div>
            );
          })}
        </>
      ) : (
        <div className={classes.empty}>
          <div className={classes.emptyIcon}>
            <CgNotes />
          </div>
          <div>It all begins with notes</div>
          <div>
            Click the{' '}
            <span
              onClick={() => props.addNewNote()}
              className={classes.newNoteText}
            >
              + New Note
            </span>{' '}
            button in the side bar to create note.
          </div>
        </div>
      )}
    </div>
  );
}
