import IMainProps from './imainprops';
import INewNote from './iupdatemote';

export default interface INoteProps extends IMainProps {
  currentNoteId: string | undefined;
  open: boolean;
  formatDate: (date: Date) => JSX.Element;
  handleSnackbar: (message: string, severity: string) => void;
  updateNote: (
    notebookId: string,
    noteId: string | undefined,
    note: INewNote
  ) => void;
  moveNote: (
    origin: string,
    destination: string,
    noteId: string | undefined
  ) => void;
  deleteNote: (origin: string, noteId: string | undefined) => void;
}
