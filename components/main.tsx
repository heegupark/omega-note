import React, { useState } from 'react';
// import Disclaimer from './disclaimer';
import Sidebar from './sidebar';
import Note from './note';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { v4 as uuidv4 } from 'uuid';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
  })
);

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Main() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('' as any);
  const [severity, setSeverity] = useState('success' as any);
  const [notebook, setNotebook] = useState('notebook-0');
  const [currentNote, setCurrentNote] = useState('note-0');
  const [state, setState] = useState({
    notebooks: {
      'notebook-0': {
        id: 'notebook-0',
        title: 'Work',
        notes: [
          {
            id: 'note-0',
            noteTitle: 'Tech interview',
            note: '<p>I need to prepare interview!</p>',
            isDeleted: false,
            createdAt: new Date(2020, 8, 10),
            updatedAt: new Date(2020, 8, 10),
          },
          {
            id: 'note-1',
            noteTitle: 'Meet up',
            note: '<p>Fun meet up!</p>',
            isDeleted: false,
            createdAt: new Date(2020, 8, 11),
            updatedAt: new Date(2020, 8, 11),
          },
        ],
        createdAt: new Date(2020, 8, 1),
        updatedAt: new Date(2020, 8, 11),
      },
      'notebook-1': {
        id: 'notebook-1',
        title: 'Personal',
        notes: [
          {
            id: 'note-0',
            noteTitle: 'Pay Utilities',
            note: '<p>I need to pay gas today!</p>',
            isDeleted: false,
            createdAt: new Date(2020, 8, 11),
            updatedAt: new Date(2020, 8, 11),
          },
        ],
        createdAt: new Date(2020, 8, 1),
        updatedAt: new Date(2020, 8, 11),
      },
    },
    notebookOrder: ['notebook-0', 'notebook-1'],
    trash: {
      id: 'trash',
      title: 'Trash',
      notes: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  } as any);

  const addNewNote = (title: string, note: string) => {
    const newNote = {
      id: uuidv4(),
      noteTitle: 'Untitled',
      note: '',
      dragging: false,
      isDeleted: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    state.notebooks[notebook].notes.unshift(newNote);
    handleSnackbar(`A note is created`, 'info');
    setState({
      ...state,
    } as any);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleSnackbar = (message: string, severity: any) => {
    setMessage(message);
    setSeverity(severity);
    setOpen(true);
  };

  const updateNote = (notebookId: string, noteId: string, newNote: any) => {
    state.notebooks[notebookId].notes.map((note: any) => {
      if (
        note.id === noteId &&
        ((newNote.note && newNote.note !== note.note) ||
          (newNote.noteTitle && newNote.noteTitle !== note.noteTitle))
      ) {
        note.noteTitle = newNote.noteTitle ? newNote.noteTitle : note.noteTitle;
        note.note = newNote.note ? newNote.note : note.note;
        note.isDeleted = newNote.isDeleted;
        note.updatedAt = new Date();
      }
    });
    setState({
      ...state,
    } as any);
  };

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <Sidebar
          notebooks={state.notebooks}
          notebookOrder={state.notebookOrder}
          notebook={notebook}
          addNewNote={addNewNote}
          setOpen={setOpen}
          setNotebook={setNotebook}
        />
        <Note
          notebooks={state.notebooks}
          notebookOrder={state.notebookOrder}
          notebook={notebook}
          addNewNote={addNewNote}
          open={open}
          updateNote={updateNote}
          currentNote={currentNote}
          setCurrentNote={setCurrentNote}
        />
        <Snackbar
          open={open}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          autoHideDuration={1000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity={severity}>
            {message}
          </Alert>
        </Snackbar>
      </div>
    </>
  );
}
