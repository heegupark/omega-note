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
  const [open, setOpen] = useState(true);
  const [message, setMessage] = useState('' as any);
  const [severity, setSeverity] = useState('success' as any);
  const [notebooks, setNotebooks] = useState([
    {
      id: 'notebook-0',
      title: 'Work',
      notes: [
        {
          id: uuidv4(),
          noteTitle: 'Tech interview',
          note: '',
          isDeleted: false,
          createdAt: new Date(2020, 8, 10),
          updatedAt: new Date(2020, 8, 10),
        },
        {
          id: uuidv4(),
          noteTitle: 'Meet up',
          note: '',
          isDeleted: false,
          createdAt: new Date(2020, 8, 11),
          updatedAt: new Date(2020, 8, 11),
        },
      ],
      createdAt: new Date(2020, 8, 1),
      updatedAt: new Date(2020, 8, 11),
    },
    {
      id: 'notebook-1',
      title: 'Personal',
      notes: [
        {
          id: uuidv4(),
          noteTitle: 'Pay Utilities',
          note: '',
          isDeleted: false,
          createdAt: new Date(2020, 8, 11),
          updatedAt: new Date(2020, 8, 11),
        },
      ],
      createdAt: new Date(2020, 8, 1),
      updatedAt: new Date(2020, 8, 11),
    },
  ] as any);

  const addNewNote = (title: string, note: string) => {
    console.log('aaa');
    handleSnackbar(`A note is created`, 'info');
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

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <Sidebar addNewNote={addNewNote} setOpen={setOpen} />
        <Note addNewNote={addNewNote} open={open} />
        <Snackbar
          open={open}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          autoHideDuration={3000}
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
