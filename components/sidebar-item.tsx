import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import IMainProps from './interfaces/imainprops';
import RemoveIcon from '@material-ui/icons/Remove';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listSelected: {
      backgroundColor: 'rgb(64,64,64)',
      borderRadius: '3px',
      '&:hover': {
        backgroundColor: 'rgb(51,51,51)',
        borderRadius: '3px',
      },
    },
    list: {
      '&:hover': {
        backgroundColor: 'rgb(51,51,51)',
        borderRadius: '3px',
      },
    },
    icon: {
      minWidth: '35px',
      color: 'rgb(165,165,165)',
    },
    removeNotebookIcon: {
      color: 'red',
      marginLeft: '20px',
    },
    menuNotebookIcon: {
      color: 'rgb(51,51,51)',
      marginLeft: '20px',
    },
  })
);

interface SidebarItemProps extends IMainProps {
  thisNotebook: string;
  open: boolean;
  handleNotebookClick: (notebook: string) => void;
  removeNotebook: (id: string) => void;
}

export default function SidebarItem(props: SidebarItemProps) {
  const classes = useStyles();
  const [removeNotebookButton, setRemoveNotebookButton] = useState<boolean>(
    false
  );

  const removeNewNotebook = () => {
    props.removeNotebook(props.thisNotebook);
  };

  return (
    <ListItem
      button
      key={props.notebooks[props.thisNotebook].id}
      className={
        props.notebook === props.thisNotebook
          ? classes.listSelected
          : classes.list
      }
      onClick={() => {
        if (!removeNotebookButton)
          props.handleNotebookClick(props.thisNotebook);
      }}
      style={{
        padding: props.open ? '0px 0px 0px 30px' : '0px 15px',
      }}
    >
      <ListItemIcon>
        <ImportContactsIcon className={classes.icon} />
      </ListItemIcon>
      <ListItemText primary={props.notebooks[props.thisNotebook].title} />
      <ListItemIcon
        onClick={() => {
          removeNewNotebook();
        }}
        onMouseOver={() => setRemoveNotebookButton(true)}
        onMouseLeave={() => setRemoveNotebookButton(false)}
      >
        {removeNotebookButton && open ? (
          <RemoveIcon className={classes.removeNotebookIcon} />
        ) : (
          <MoreHorizIcon className={classes.menuNotebookIcon} />
        )}
      </ListItemIcon>
    </ListItem>
  );
}
