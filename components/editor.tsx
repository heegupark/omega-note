import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { HiDotsHorizontal } from 'react-icons/hi';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      outline: 'none',
      width: '95%',
      paddingLeft: '15px',
      margin: '0px',
      border: 'none',
      backgroundColor: 'rgb(248,248,248)',
      fontSize: '24px',
    },
    editor: {
      width: '100%',
      minWidth: '400px',
      wordBreak: 'break-word',
      paddingBottom: '10px',
      '&:hover': {
        backgroundColor: 'white',
      },
    },
    editorInTrash: {
      width: '100%',
      minWidth: '600px',
      wordBreak: 'break-word',
      padding: '15px',
    },
    dot: {
      position: 'absolute',
      float: 'right',
      right: '20px',
      cursor: 'pointer',
      marginTop: '10px',
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

const theme = 'snow';
const placeholder = `What's in your mind?`;
const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }, { color: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    matchVisual: false,
  },
};
const formats = [
  'header',
  'font',
  'color',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  // 'video',
];

export default function Editor(props: any) {
  const [isOpen, setOpen] = useState(false);
  const ReactQuill =
    typeof window === 'object' ? require('react-quill') : () => false;
  const classes = useStyles();
  const [title, setTitle] = useState<any | HTMLElement>('');
  const [isDelete, setIsDeleted] = useState<boolean | HTMLElement>(false);
  const [contents, setContents] = useState<any | HTMLElement>('');
  const [lastNotebook, setLastNotebook] = useState<string | HTMLElement>('');
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

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleChange = (html: any) => {
    setContents(html);
    const newNote = {
      note: html,
    };
    props.updateNote(
      props.notebooks[props.notebook].id,
      props.currentNote,
      newNote
    );
  };

  const getNote = (notebookId: string, noteId: string) => {
    const newContents = props.notebooks[notebookId].notes.filter(
      (note: any) => note.id === noteId
    );
    setTitle(newContents[0].noteTitle);
    setContents(newContents[0].note);
    setIsDeleted(newContents[0].isDeleted);
    setLastNotebook(newContents[0].lastNotebook);
  };

  useEffect(() => {
    getNote(props.notebook, props.currentNote);
  }, [props.notebook, props.currentNote]);

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
    const newNote = {
      noteTitle: e.target.value,
    };
    props.updateNote(
      props.notebooks[props.notebook].id,
      props.currentNote,
      newNote
    );
  };

  const handleMoveToTrash = () => {
    props.moveNote(props.notebook, 'trash', props.currentNote);
    handlePopoverClose();
  };

  const handleRestore = () => {
    props.moveNote('trash', lastNotebook, props.currentNote);
    handlePopoverClose();
  };

  const handleDelete = () => {
    props.deleteNote('trash', props.currentNote);
    handlePopoverClose();
    handleModalClose();
  };

  return (
    <>
      {isDelete ? (
        <>
          <span
            className={classes.title}
            onClick={() =>
              props.handleSnackbar(
                'You can not update a note title in the Trash',
                'error'
              )
            }
          >
            {title}
          </span>
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
          <div
            className={classes.editorInTrash}
            dangerouslySetInnerHTML={{ __html: contents }}
            onClick={() =>
              props.handleSnackbar(
                'You can not update a note in the Trash',
                'error'
              )
            }
          />
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
        </>
      ) : (
        <>
          <input
            value={title}
            className={classes.title}
            onChange={(e: any) => handleTitleChange(e)}
          />
          <Menu
            id="dot-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handlePopoverClose}
          >
            <MenuItem onClick={handleMoveToTrash}>Move to trash</MenuItem>
          </Menu>
          <span className={classes.dot} onClick={handlePopoverOpen}>
            <HiDotsHorizontal />
          </span>
          {!!ReactQuill && isOpen && (
            <ReactQuill
              theme={theme}
              onChange={handleChange}
              value={contents}
              modules={modules}
              formats={formats}
              bounds={'.app'}
              placeholder={placeholder}
              className={classes.editor}
            />
          )}
        </>
      )}
    </>
  );
}
