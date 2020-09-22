import React from 'react';
import NoteList from './note-list';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDdirection: 'row',
      height: '100vh',
    },
    box: {
      display: 'flex',
      flexDdirection: 'column',
      backgroundColor: 'rgb(248, 248, 248)',
      padding: '10px',
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

export default function Note(props: any) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.box}>
          <DndProvider backend={HTML5Backend}>
            <NoteList
              notebooks={props.notebooks}
              notebookOrder={props.notebookOrder}
              notebook={props.notebook}
              addNewNote={props.addNewNote}
              updateNote={props.updateNote}
            />
          </DndProvider>
        </div>
        <div>
          <span>Contents2</span>
        </div>
      </div>
    </>
  );
}
