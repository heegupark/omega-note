import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { XYCoord, useDrag, useDragLayer, DragSourceMonitor } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { BsBook } from 'react-icons/bs';
import INote from './interfaces/inote';
import INoteProps from './interfaces/inoteprops';

const layerStyles: React.CSSProperties = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 9999,
  left: 0,
  top: 0,
  // width: '100%',
  height: '100%',
};

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
      height: '100px',
      cursor: 'pointer',
      display: 'flex',
      border: '1px groove rgb(0,0,0,0)',
      flexDirection: 'column',
      overflow: 'hidden',
      wordWrap: 'break-word',
      padding: '15px',
    },
    boxSelected: {
      height: '100px',
      cursor: 'pointer',
      display: 'flex',
      border: '1px groove blue',
      borderRadius: '5px',
      backgroundColor: 'white',
      flexDirection: 'column',
      overflow: 'hidden',
      wordWrap: 'break-word',
      padding: '15px',
    },
    previewIcon: { marginRight: '3px', verticalAlign: 'middle' },
    previewItem: { marginLeft: '3px' },
    preview: {
      border: '1px solid rgb(186,223,229)',
      borderRadius: '3px',
      // width: '150px',
      overflow: 'hidden',
      fontSize: '14px',
      backgroundColor: 'rgb(248,248,248,0.6)',
      padding: '10px',
    },
    noteTitle: {
      color: 'rgb(61,61,61)',
      fontSize: '14px',
    },
    noteContent: {
      fontSize: '12px',
      color: 'rgb(115,115,115)',
      overflow: 'hidden',
      height: '35px',
    },
    date: {
      fontSize: '11px',
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
    dot: {
      float: 'right',
      cursor: 'pointer',
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: 'rgb(222, 222, 222)',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(1, 2, 2),
      textAlign: 'center',
      width: '350px',
      borderRadius: '5px',
      fontSize: '12px',
      outline: 'none',
    },
    button: {
      height: '30px',
      margin: '10px 15px',
    },
  })
);

interface NoteListProps extends INoteProps {
  note: INote;
  convertTitle: (title: string, length: number) => string;
}

export default function NoteListItem(props: NoteListProps) {
  const classes = useStyles();

  const [{ opacity }, drag, preview] = useDrag({
    item: {
      id: props.note.id,
      name: props.note.noteTitle,
      notebook: props.notebook,
      type: 'note',
    },
    collect: (monitor: DragSourceMonitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
      isDragging: monitor.isDragging(),
    }),
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, []);

  const getItemStyles = (
    initialOffset: XYCoord | null,
    currentOffset: XYCoord | null,
    isSnapToGrid: boolean
  ) => {
    if (!initialOffset || !currentOffset) {
      return {
        display: 'none',
      };
    }

    let { x, y } = currentOffset;

    if (isSnapToGrid) {
      x -= initialOffset.x;
      y -= initialOffset.y;
      // [x, y] = snapToGrid(x, y);
      x += initialOffset.x;
      y += initialOffset.y;
    }

    const transform = `translate(${x}px, ${y}px)`;
    return {
      transform,
      WebkitTransform: transform,
    };
  };

  const {
    itemType,
    isDragging,
    item,
    initialOffset,
    currentOffset,
  } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  const convertToString = (string: any) => {
    const limit = 30;
    const convertedString = string.replace(/(<([^>]+)>)/gi, '');
    return `${convertedString.substring(0, limit)}${
      convertedString.length > limit ? '...' : ''
    }`;
  };
  const isSelected = props.note.id === props.currentNoteId;

  const handleClickInTrash = () => {
    if (isSelected) {
      props.handleSnackbar('You can not drag a note to other place', 'error');
    }
  };

  return (
    <>
      <div
        className={isSelected ? classes.boxSelected : classes.box}
        onClick={() => props.setCurrentNoteId(props.note.id)}
      >
        {props.note.isDeleted ? (
          <div onClick={handleClickInTrash}>
            <div className={classes.noteTitle}>
              {props.convertTitle(props.note.noteTitle, 20)}
            </div>
            <div className={classes.noteContent}>
              {convertToString(props.note.note)}
            </div>
            <div className={classes.date}>
              {props.formatDate(props.note.updatedAt)}
            </div>
          </div>
        ) : (
          <div ref={drag} style={{ opacity }}>
            <div className={classes.noteTitle}>
              {props.convertTitle(props.note.noteTitle, 20)}
            </div>
            <div className={classes.noteContent}>
              {convertToString(props.note.note)}
            </div>
            <div className={classes.date}>
              {props.formatDate(props.note.updatedAt)}
            </div>
          </div>
        )}
      </div>
      <div style={layerStyles}>
        <div style={getItemStyles(initialOffset, currentOffset, false)}>
          <div className={classes.preview}>
            <span className={classes.previewIcon}>
              <BsBook />
            </span>
            <span className={classes.previewItem}>
              {item?.name.length > 20
                ? item?.name.substring(0, 20) + '...'
                : item?.name}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
