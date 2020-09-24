import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { HiDotsHorizontal } from 'react-icons/hi';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
    dot: {
      position: 'absolute',
      float: 'right',
      right: '20px',
      cursor: 'pointer',
      marginTop: '10px',
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
  const [title, setTitle] = useState('' as any);
  const [contents, setContents] = useState('' as any);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
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
    handleClose();
  };

  return (
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
        onClose={handleClose}
      >
        <MenuItem onClick={handleMoveToTrash}>Move to trash</MenuItem>
      </Menu>
      <span className={classes.dot} onClick={handleClick}>
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
  );
}
