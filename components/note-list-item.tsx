import React, { useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { XYCoord, useDrag, useDragLayer, DragSourceMonitor } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { BsBook } from 'react-icons/bs';

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
      // position: 'sticky',
      height: '100px',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
    },
    previewIcon: { marginRight: '3px', verticalAlign: 'middle' },
    previewItem: { marginLeft: '3px' },
    noteTitle: {
      padding: '10px 20px 0px 20px',
      color: 'rgb(61,61,61)',
    },
    preview: {
      border: '1px solid rgb(186,223,229)',
      borderRadius: '3px',
      // width: '150px',
      overflow: 'hidden',
      fontSize: '14px',
      backgroundColor: 'rgb(248,248,248,0.6)',
      padding: '10px',
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

  const [{ opacity }, drag, preview] = useDrag({
    item: { type: props.noteTitle },
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

  return (
    <>
      <div className={classes.box}>
        <div ref={drag} style={{ opacity }}>
          <div className={classes.noteTitle}>{props.noteTitle}</div>
          <div className={classes.noteContent}>{props.note}</div>
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
