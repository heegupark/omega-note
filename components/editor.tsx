import React, { useEffect, useState, useRef } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
// import ReactQuill, { Quill } from 'react-quill';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      outline: 'none',
      width: '100%',
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
    console.log(notebookId, props.currentNote);
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

  return (
    <>
      <input
        value={title}
        className={classes.title}
        onChange={(e: any) => handleTitleChange(e)}
      />
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
