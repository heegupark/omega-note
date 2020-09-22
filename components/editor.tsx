import React, { useEffect, useState, useRef } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

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

export default function Note(props: any) {
  const classes = useStyles();
  const editorRef = useRef() as any;
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClassicEditor } = (editorRef.current as any) || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react'),
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
    };
    setEditorLoaded(true);
  }, []);

  return (
    <>
      {editorLoaded ? (
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onInit={(editor: any) => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event: any, editor: any) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
        />
      ) : (
        <>
          <div className={classes.loading}>{'loading editor...'}</div>
          <div className={classes.progress}>
            <LinearProgress />
          </div>
        </>
      )}
    </>
  );
}
