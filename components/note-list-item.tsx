import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useDrag } from 'react-dnd';

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
    box: {
      position: 'sticky',
      height: '100px',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
    },
    noteTitle: {
      padding: '10px 20px 0px 20px',
      color: 'rgb(61,61,61)',
    },
    noteContent: {
      padding: '5px 20px',
      fontSize: '14px',
      color: 'rgb(115,115,115)',
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

export default function NoteListItem(props: any) {
  const classes = useStyles();

  const [{ opacity, border }, drag, preview] = useDrag({
    item: { type: props.noteTitle },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
      border: monitor.isDragging() ? '1px solid blue' : '',
    }),
  });
  return (
    <>
      <div className={classes.box}>
        <div ref={drag} style={{ opacity, border }}>
          <div ref={preview} className={classes.noteTitle}>
            {props.noteTitle}
          </div>
          <div className={classes.noteContent}>{props.note}</div>
        </div>
      </div>
    </>
  );
}
