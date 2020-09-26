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
import INote from './interfaces/inote';
import IUpdateNote from './interfaces/iupdatenote';
import INotebooks from './interfaces/inotebooks';

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
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [severity, setSeverity] = useState<any>('success');
  const [notebook, setNotebook] = useState<string>('notebook-0');
  const [currentNoteId, setCurrentNoteId] = useState<string | undefined>('');
  const [state, setState] = useState<INotebooks>({
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
            lastNotebook: '',
            lastNotebookTitle: '',
            createdAt: new Date(2020, 8, 10),
            updatedAt: new Date(2020, 8, 10),
          },
          {
            id: 'note-01',
            noteTitle: 'Meet up',
            note: '<p>Fun meet up!</p>',
            isDeleted: false,
            lastNotebook: '',
            lastNotebookTitle: '',
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
            lastNotebook: '',
            lastNotebookTitle: '',
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
  });

  useEffect(() => {
    setCurrentNoteIdByNotebook(notebook);
  }, []);

  const addNewNote = (title: string, note: string) => {
    const newNote = {
      id: uuidv4(),
      noteTitle: title ? title : 'Untitled',
      note: note ? note : '',
      dragging: false,
      isDeleted: false,
      lastNotebook: '',
      lastNotebookTitle: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    state.notebooks[notebook].notes.unshift(newNote);
    updateDate(notebook, undefined);
    setCurrentNoteIdByNotebook(notebook);
    handleSnackbar(`A note is created`, 'info');
    setState({
      ...state,
    });
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const updateNote = (
    notebookId: string,
    noteId: string | undefined,
    newNote: IUpdateNote
  ) => {
    state.notebooks[notebookId].notes.map((note: INote) => {
      if (
        note.id === noteId &&
        ((newNote.note && newNote.note !== note.note) ||
          (newNote.noteTitle && newNote.noteTitle !== note.noteTitle))
      ) {
        note.noteTitle = newNote.noteTitle ? newNote.noteTitle : note.noteTitle;
        note.note = newNote.note ? newNote.note : note.note;
        // note.isDeleted = newNote.isDeleted;
        note.updatedAt = new Date();
      }
    });
    state.notebooks[notebookId].updatedAt = new Date();
    setState({
      ...state,
    } as any);
  };

  const updateDate = (notebookId: string, noteId: string | undefined) => {
    if (noteId) {
      state.notebooks[notebookId].notes.map((note: INote) => {
        if (note.id === noteId) {
          note.updatedAt = new Date();
        }
      });
    }
    state.notebooks[notebookId].updatedAt = new Date();
    setState({
      ...state,
    });
  };

  const moveNote = (
    origin: string,
    destination: string,
    noteId: string | undefined
  ) => {
    let tempNote: INote = {} as INote;
    console.log(origin, destination, noteId);
    state.notebooks[origin].notes.map((note: INote, index: number) => {
      if (note.id === noteId) {
        if (destination === 'trash') {
          note.isDeleted = true;
          note.lastNotebook = origin;
        } else {
          note.isDeleted = false;
        }
        tempNote = note;
        state.notebooks[origin].notes.splice(index, 1);
      }
    });
    let newId: string = '';
    if (!state.notebooks[destination]) {
      addNewNotebook(tempNote.lastNotebook, tempNote.lastNotebookTitle);
      newId = tempNote.lastNotebook;
    } else {
      newId = destination;
    }
    console.log(newId);
    state.notebooks[newId].notes.push(tempNote);
    state.notebooks[newId].updatedAt = new Date();
    handleNotebookClick(origin);
    updateDate(origin, noteId);
    if (destination === 'trash') {
      handleSnackbar(
        `A note is moved to ${state.notebooks[newId].title}`,
        'warning'
      );
    } else {
      handleSnackbar(
        `A note is restored to ${state.notebooks[newId].title}`,
        'success'
      );
    }
    setState({
      ...state,
    });
  };

  const deleteNote = (notebookId: string, noteId: string | undefined) => {
    state.notebooks[notebookId].notes.filter((note: INote, index: number) => {
      if (note.id === noteId) {
        state.notebooks[notebookId].notes.splice(index, 1);
      }
    });
    state.notebooks[notebookId].updatedAt = new Date();
    setCurrentNoteIdByNotebook(notebookId);
    updateDate(notebookId, noteId);
    handleSnackbar(`A note is permanently deleted`, 'error');
    setState({
      ...state,
    });
  };

  const formatDate = (date: Date) => {
    const createdTime: number = new Date(date).valueOf();
    const currentTime: number = new Date().valueOf();
    let diff: number = (currentTime - createdTime) / 1000;
    if (diff <= 86400) {
      return <Moment fromNow date={date} />;
    } else if (diff <= 172800) {
      return <div>Yesterday</div>;
    } else {
      return <Moment format="MMM D, YYYY" date={new Date(date)} />;
    }
  };

  const handleSnackbar = (message: string, severity: string) => {
    setMessage(message);
    setSeverity(severity);
    setOpen(true);
  };

  const handleNotebookClick = (notebookId: string) => {
    setNotebook(notebookId);
    setCurrentNoteIdByNotebook(notebookId);
  };

  const setCurrentNoteIdByNotebook = (notebookId: string) => {
    if (notebookId) {
      setCurrentNoteId(
        state.notebooks[notebookId].notes.length > 0
          ? state.notebooks[notebookId].notes[0].id
          : undefined
      );
    }
  };

  const addNewNotebook = (_id: string, title: string) => {
    const id = _id || uuidv4();
    const newNotbook = {
      id,
      title,
      notes: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    state.notebooks[id] = newNotbook;
    state.notebookOrder.push(id);
    handleNotebookClick(id);
    handleSnackbar(`New notebook is created`, 'success');
    setState({
      ...state,
    });
  };

  const removeNotebook = (id: string) => {
    const title = state.notebooks[id].title;
    state.notebooks[id].notes.map((note: INote) => {
      let tempNote: INote = {} as INote;
      note.isDeleted = true;
      note.lastNotebook = id;
      note.lastNotebookTitle = title;
      tempNote = note;
      state.notebooks['trash'].notes.push(tempNote);
      state.notebooks['trash'].updatedAt = new Date();
    });
    delete state.notebooks[id];
    state.notebookOrder.splice(state.notebookOrder.indexOf(id), 1);
    const nextNotebook =
      state.notebookOrder.length > 0 ? state.notebookOrder[0] : '';
    if (nextNotebook) {
      setNotebook(nextNotebook);
      setCurrentNoteIdByNotebook(nextNotebook);
    } else {
      setNotebook('');
      setCurrentNoteIdByNotebook('');
    }
    handleSnackbar(`'${title}' is deleted`, 'error');
    setState({
      ...state,
    });
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Sidebar
        notebooks={state.notebooks}
        notebookOrder={state.notebookOrder}
        notebook={notebook}
        addNewNote={addNewNote}
        setNotebook={setNotebook}
        setCurrentNoteId={setCurrentNoteId}
        handleNotebookClick={handleNotebookClick}
        addNewNotebook={addNewNotebook}
        removeNotebook={removeNotebook}
      />
      <Note
        notebooks={state.notebooks}
        notebookOrder={state.notebookOrder}
        notebook={notebook}
        addNewNote={addNewNote}
        open={open}
        updateNote={updateNote}
        currentNoteId={currentNoteId}
        setCurrentNoteId={setCurrentNoteId}
        formatDate={formatDate}
        moveNote={moveNote}
        handleSnackbar={handleSnackbar}
        deleteNote={deleteNote}
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
  );
}
