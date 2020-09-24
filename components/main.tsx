import React, { useState, useEffect } from 'react';
// import Disclaimer from './disclaimer';
import Sidebar from './sidebar';
import Note from './note';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { v4 as uuidv4 } from 'uuid';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Moment from 'react-moment';

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
  const [currentNote, setCurrentNote] = useState('' as any);
  const [state, setState] = useState({
    notebooks: {
      'notebook-0': {
        id: 'notebook-0',
        title: 'Work',
        notes: [
          {
            id: 'note-00',
            noteTitle: 'Tech interview',
            note: '<p>I need to prepare interview!</p>',
            isDeleted: false,
            createdAt: new Date(2020, 8, 10),
            updatedAt: new Date(2020, 8, 10),
          },
          {
            id: 'note-01',
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
            id: 'note-10',
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
      trash: {
        id: 'trash',
        title: 'Trash',
        notes: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    },
    notebookOrder: ['notebook-0', 'notebook-1'],
  } as any);

  useEffect(() => {
    setCurrentNote(
      state.notebooks[notebook].notes.length > 0
        ? state.notebooks[notebook].notes[0].id
        : ''
    );
  }, []);

  const addNewNote = (title: string, note: string) => {
    const newNote = {
      id: uuidv4(),
      noteTitle: title ? title : 'Untitled',
      note: note ? note : '',
      dragging: false,
      isDeleted: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    state.notebooks[notebook].notes.unshift(newNote);
    updateDate(notebook, null);
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
    state.notebooks[notebookId].updatedAt = new Date();
    setState({
      ...state,
    } as any);
  };

  const updateDate = (notebookId: any, noteId: any) => {
    if (noteId) {
      state.notebooks[notebookId].notes.map((note: any) => {
        if (note.id === noteId) {
          note.updatedAt = new Date();
        }
      });
    }
    state.notebooks[notebookId].updatedAt = new Date();
    setState({
      ...state,
    } as any);
  };

  const moveNote = (origin: string, destination: string, noteId: string) => {
    let tempNote = null as any;
    state.notebooks[origin].notes.map((note: any, index: any) => {
      if (note.id === noteId) {
        if (destination === 'trash') note.isDeleted = true;
        tempNote = note;
        state.notebooks[origin].notes.splice(index, 1);
      }
    });
    state.notebooks[destination].notes.push(tempNote);
    state.notebooks[destination].updatedAt = new Date();
    setCurrentNote(
      state.notebooks[notebook].notes.length > 0
        ? state.notebooks[notebook].notes[0].id
        : ''
    );
    updateDate(origin, noteId);
    handleSnackbar(`A note is moved to trash`, 'warning');
    setState({
      ...state,
    } as any);
  };

  const formatDate = (date: Date) => {
    const createdTime = new Date(date) as any;
    const currentTime = new Date() as any;
    let diff = (currentTime - createdTime) / 1000;
    if (diff <= 86400) {
      return <Moment fromNow date={date} />;
    } else if (diff <= 172800) {
      return <div>Yesterday</div>;
    } else {
      return <Moment format="MMM D, YYYY" date={new Date(date)} />;
    }
  };

  const handleSnackbar = (message: string, severity: any) => {
    setMessage(message);
    setSeverity(severity);
    setOpen(true);
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
          setNotebook={setNotebook}
          setCurrentNote={setCurrentNote}
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
          formatDate={formatDate}
          moveNote={moveNote}
          handleSnackbar={handleSnackbar}
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
