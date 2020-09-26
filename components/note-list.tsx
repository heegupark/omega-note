import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CgNotes } from 'react-icons/cg';
import { FaRegTrashAlt } from 'react-icons/fa';
import Divider from '@material-ui/core/Divider';
import NoteListItem from './note-list-item';
import INote from './interfaces/inote';
import INoteProps from './interfaces/inoteprops';

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
      padding: '10px 15px',
      fontSize: '22px',
      wordBreak: 'break-word',
    },
    noteCount: {
      fontSize: '12px',
      padding: '5px 15px',
      color: 'rgb(107,107,107)',
    },
    date: {
      fontSize: '10px',
      paddingLeft: '10px',
    },
    listBox: {
      overflowY: 'scroll',
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

export default function NoteList(props: INoteProps) {
  const classes = useStyles();

  const convertTitle = (title: string, length: number) => {
    return title.length > length ? title.substring(0, length) + '...' : title;
  };

  const noteCount = props.notebooks[props.notebook].notes.length;
  const notebookTitle = props.notebooks[props.notebook].title;
  const notebookUpdatedAt = props.notebooks[props.notebook].updatedAt;

  return (
    <div className={classes.root}>
      <div className={classes.title}>{convertTitle(notebookTitle, 15)}</div>
      <div className={classes.noteCount}>
        {`${noteCount} note${noteCount > 1 ? 's' : ''}`}
        <span className={classes.date}>
          {'Last edited on '}
          {props.formatDate(notebookUpdatedAt)}
        </span>
      </div>
      <Divider />
      {noteCount > 0 ? (
        <div className={classes.listBox}>
          {props.notebooks[props.notebook].notes.map((note: INote) => {
            return (
              <div key={note.id}>
                <NoteListItem
                  note={note}
                  {...props}
                  convertTitle={convertTitle}
                />
                <Divider />
              </div>
            );
          })}
        </div>
      ) : (
        <div className={classes.empty}>
          {props.notebook === 'trash' ? (
            <>
              <div className={classes.emptyIcon}>
                <FaRegTrashAlt />
              </div>
              <div>Trash is Empty</div>
            </>
          ) : (
            <>
              <div className={classes.emptyIcon}>
                <CgNotes />
              </div>
              <div>It all begins with notes</div>
              <div>
                Click the{' '}
                <span
                  onClick={() => props.addNewNote('', '')}
                  className={classes.newNoteText}
                >
                  + New Note
                </span>{' '}
                button in the side bar to create note.
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
