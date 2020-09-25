import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import NoteList from './note-list';
import EditorTitle from './editor-title';
import Editor from './editor';
import INoteProps from './interfaces/inoteprops';

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
  })
);

export default function Note(props: INoteProps) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.box}>
          <DndProvider backend={HTML5Backend}>
            <NoteList {...props} />
          </DndProvider>
        </div>
        <div>
          <EditorTitle {...props} />
          {props.currentNoteId && <Editor {...props} />}
        </div>
      </div>
    </>
  );
}
