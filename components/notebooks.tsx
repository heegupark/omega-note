import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import INotebook from './interfaces/inotebook';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      margin: 'auto',
    },
    notebook: {
      fontSize: '24px',
      padding: '20px 30px',
    },
    paper: {
      width: 800,
      height: '100vh',
      padding: '10px 30px',
    },
    table: {
      width: '100%',
      color: 'rgb(51,51,51)',
    },
    row: {
      '&:hover': {
        backgroundColor: 'rgb(75,164,65)',
        color: 'white',
      },
    },
  })
);

interface INotebooksProps {
  notebooks: INotebook;
  notebookOrder: Array<string>;
  handleNotebookClick: (notebook: string) => void;
}

export default function Notebooks(props: INotebooksProps) {
  const classes = useStyles();

  const getTimeMsg = (date: Date) => {
    const createdTime = new Date(date).valueOf();
    const currentTime = new Date().valueOf();
    const second = 60;
    const minute = 60;
    const hour = 24;
    let divider = 1;
    let timeMsg = '';
    let diff = (currentTime - createdTime) / 1000;
    if (diff <= second) {
      timeMsg = 'second';
    } else if (diff <= second * minute) {
      divider = second;
      timeMsg = 'minute';
    } else if (diff <= second * minute * hour) {
      divider = second * minute;
      timeMsg = 'hour';
    } else if (diff <= 172800) {
      return 'Yesterday';
    } else {
      const dateArr = date.toString().split(' ');
      return `${dateArr[1]} ${dateArr[2]}, ${dateArr[3]}`;
    }
    diff /= divider;
    const displayTime = Math.abs(Math.round(diff));
    const plural = displayTime > 1 ? 's' : '';
    const timeMessage = `${displayTime} ${timeMsg}${plural} ago`;
    return timeMessage;
  };

  const createData = (
    id: string,
    title: string,
    noteCount: number,
    createdAt: string,
    updatedAt: string
  ) => {
    return { id, title, noteCount, createdAt, updatedAt };
  };

  const rows = props.notebookOrder.map((notebook: string) => {
    return createData(
      props.notebooks[notebook].id,
      props.notebooks[notebook].title,
      props.notebooks[notebook].notes.length,
      getTimeMsg(props.notebooks[notebook].createdAt),
      getTimeMsg(props.notebooks[notebook].updatedAt)
    );
  });

  return (
    <div className={classes.root}>
      <div className={classes.notebook}>Notebooks</div>
      <div className={classes.paper}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell>Notebook</TableCell>
                <TableCell align="center">Number of Notes</TableCell>
                <TableCell align="center">Created Date</TableCell>
                <TableCell align="center">Update Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id} className={classes.row}>
                  <TableCell
                    component="th"
                    scope="row"
                    onClick={() => props.handleNotebookClick(row.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {row.title}
                  </TableCell>
                  <TableCell align="center">{row.noteCount}</TableCell>
                  <TableCell align="center">{row.createdAt}</TableCell>
                  <TableCell align="center">{row.updatedAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
