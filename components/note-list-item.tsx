import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { XYCoord, useDrag, useDragLayer, DragSourceMonitor } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { BsBook } from 'react-icons/bs';
import { HiDotsHorizontal } from 'react-icons/hi';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

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

export default function NoteListItem(props: any) {
  const [showDotMenu, setShowDotMenu] = useState(false);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleModalOpen = () => {
    handlePopoverClose();
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handlePopoverOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

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

  const handleMoveToTrash = () => {
    props.moveNote(props.notebook, 'trash', props.currentNote);
    handlePopoverClose();
  };

  const handleRestore = () => {
    props.moveNote('trash', props.note.lastNotebook, props.currentNote);
    handlePopoverClose();
  };

  const handleDelete = () => {
    props.deleteNote('trash', props.currentNote);
    handlePopoverClose();
    handleModalClose();
  };

  const isSelected = props.note.id === props.currentNote;
  return (
    <>
      <div
        className={isSelected ? classes.boxSelected : classes.box}
        onClick={() => props.setCurrentNote(props.note.id)}
        onMouseEnter={() => {
          setShowDotMenu(true);
        }}
        onMouseLeave={() => {
          setShowDotMenu(false);
        }}
      >
        {props.note.isDeleted ? (
          <div>
            <div className={classes.noteTitle}>
              {props.convertTitle(props.note.noteTitle, 20)}
              {showDotMenu && (
                <>
                  <Menu
                    id="dot-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handlePopoverClose}
                  >
                    <MenuItem onClick={handleRestore}>Restore</MenuItem>
                    <MenuItem onClick={handleModalOpen}>Delete</MenuItem>
                  </Menu>
                  <span className={classes.dot} onClick={handlePopoverOpen}>
                    <HiDotsHorizontal />
                  </span>
                </>
              )}
            </div>
            <div className={classes.noteContent}>
              {convertToString(props.note.note)}
            </div>
            <div className={classes.date}>
              {props.formatDate(props.note.updatedAt)}
            </div>
            <Modal
              open={modalOpen}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              className={classes.modal}
            >
              <div className={classes.paper}>
                <h2 id="simple-modal-title">Are you really want to delete?</h2>
                <p id="simple-modal-description">
                  You will permanently delete this note.
                </p>
                <Button
                  className={classes.button}
                  variant="outlined"
                  color="secondary"
                  onClick={handleDelete}
                >
                  Delete
                </Button>
                <Button
                  className={classes.button}
                  variant="outlined"
                  color="default"
                  onClick={handleModalClose}
                >
                  Cancel
                </Button>
              </div>
            </Modal>
          </div>
        ) : (
          <div ref={drag} style={{ opacity }}>
            <div className={classes.noteTitle}>
              {props.convertTitle(props.note.noteTitle, 20)}
              {showDotMenu && (
                <>
                  <Menu
                    id="dot-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handlePopoverClose}
                  >
                    <MenuItem onClick={handleMoveToTrash}>
                      Move to trash
                    </MenuItem>
                  </Menu>
                  <span className={classes.dot} onClick={handlePopoverOpen}>
                    <HiDotsHorizontal />
                  </span>
                </>
              )}
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
