import React, { useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { XYCoord, useDrag, useDragLayer, DragSourceMonitor } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { BsBook } from 'react-icons/bs';
import Moment from 'react-moment';

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
  })
);

export default function NoteListItem(props: any) {
  const classes = useStyles();

  const [{ opacity }, drag, preview] = useDrag({
    item: { type: props.note.noteTitle },
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

  const formatDate = (date: Date) => {
    const createdTime = new Date(date) as any;
    const currentTime = new Date() as any;
    let diff = (currentTime - createdTime) / 1000;
    if (diff <= 86400) {
      return <Moment fromNow date={props.note.updatedAt} />;
    } else if (diff <= 172800) {
      return <div>Yesterday</div>;
    } else {
      return <Moment format="MMM D, YYYY" date={props.note.updatedAt} />;
    }
  };

  const isSelected = props.note.id === props.currentNote;
  return (
    <>
      <div
        className={isSelected ? classes.boxSelected : classes.box}
        onClick={() => props.setCurrentNote(props.note.id)}
      >
        <div ref={drag} style={{ opacity }}>
          <div className={classes.noteTitle}>
            {props.convertTitle(props.note.noteTitle, 20)}
          </div>
          <div className={classes.noteContent}>
            {convertToString(props.note.note)}
          </div>
          <div className={classes.date}>{formatDate(props.note.updatedAt)}</div>
        </div>
      </div>
      <div style={layerStyles}>
        <div
          style={getItemStyles(initialOffset, currentOffset, props.snapToGrid)}
        >
          <div className={classes.preview}>
            <span className={classes.previewIcon}>
              <BsBook />
            </span>
            <span className={classes.previewItem}>{itemType}</span>
          </div>
        </div>
      </div>
    </>
  );
}
