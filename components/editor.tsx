import React, { useEffect, useState, useRef } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
// import ReactQuill, { Quill } from 'react-quill';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  })
);

const theme = 'snow';
const placeholder = 'Compose an epic...';
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
    // toggle to add extra line breaks when pasting HTML:
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
  'video',
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
      // noteTitle: title,
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
  }, [props.currentNote]);

  return (
    <>
      {!!ReactQuill && isOpen && (
        <ReactQuill
          theme={theme}
          onChange={handleChange}
          value={contents}
          modules={modules}
          formats={formats}
          bounds={'.app'}
          placeholder={placeholder}
          style={{
            width: '100%',
            maxWidth: '800px',
            height: '89vh',
          }}
        />
      )}
    </>
  );
}
