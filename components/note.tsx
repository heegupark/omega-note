import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import NoteList from './note-list';
import EditorTitle from './editor-title';
import Editor from './editor';
import INoteProps from './interfaces/inoteprops';
import { CgNotes } from 'react-icons/cg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDdirection: 'row',
      height: '100vh',
    },
    loading: {
      margin: '20px 20px 0px 20px',
    },
    progress: {
      width: '100%',
      margin: '20px 20px 0px 20px',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
    box: {
      display: 'flex',
      flexDdirection: 'column',
      backgroundColor: 'rgb(248, 248, 248)',
      height: '100vh',
      resize: 'horizontal',
      minWidth: '200px',
      width: '300px',
      maxWidth: '400px',
      overflow: 'hidden',
      borderRight: '1px solid rgb(230, 230, 230)',
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

export default function Note(props: INoteProps) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.box}>
          {props.notebook ? (
            // <DndProvider backend={HTML5Backend}>
            <NoteList {...props} />
          ) : (
            // </DndProvider>
            <div className={classes.empty}>
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
            </div>
          )}
        </div>
        <div>
          {props.notebook && (
            <>
              <EditorTitle {...props} />
              {props.currentNoteId && <Editor {...props} />}
            </>
          )}
        </div>
      </div>
    </>
  );
}
