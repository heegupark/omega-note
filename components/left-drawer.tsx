import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import NoteRoundedIcon from '@material-ui/icons/NoteRounded';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: '5px',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      backgroundColor: 'rgb(26,26,26)',
      color: 'rgb(165,165,165)',
      padding: '5px',
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(7) + 1,
      },
      backgroundColor: 'rgb(26,26,26)',
      padding: '5px 0px',
    },
    toolbar: {
      position: 'absolute',
      bottom: '0',
      right: '0',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    folder: {
      '&:hover': {
        backgroundColor: 'rgb(64,64,64)',
        borderRadius: '3px',
      },
    },
    icon: {
      color: 'rgb(165,165,165)',
    },
    addNoteIcon: {
      color: 'white',
    },
    addNote: {
      backgroundColor: 'rgb(0,168,45)',
      color: 'white',
      borderRadius: '50px',
      '&:hover': {
        backgroundColor: 'rgb(0,143,38)',
      },
      padding: '8px',
      margin: 'auto',
      height: '40px',
    },
  })
);

export default function LeftDrawer(props: any) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
    props.setOpen(!open);
  };

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <List>
        <ListItem key="o-note">
          <ListItemIcon>
            <img
              src="../../static/images/o-logo.png"
              style={{ width: '22px' }}
            />
          </ListItemIcon>
          <ListItemText primary="o-note" />
        </ListItem>
      </List>
      <List>
        <ListItem
          button
          key="add-note"
          className={classes.addNote}
          style={{ width: open ? '85%' : '70%' }}
        >
          <ListItemIcon>
            <Tooltip title="Click to add a note" arrow>
              <AddIcon className={classes.addNoteIcon} />
            </Tooltip>
          </ListItemIcon>
          <Tooltip title="Click to add a note" arrow>
            <ListItemText primary="New Note" />
          </Tooltip>
        </ListItem>
      </List>
      <List>
        <ListItem button key="Notebooks" className={classes.folder}>
          <ListItemIcon>
            <NoteRoundedIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Notebooks" />
        </ListItem>
      </List>
      <List>
        <ListItem button key="Trash" className={classes.folder}>
          <ListItemIcon>
            <DeleteOutlineRoundedIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Trash" />
        </ListItem>
      </List>
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerToggle} className={classes.icon}>
          {open ? (
            <Tooltip title="Click to close" arrow>
              <ChevronLeftIcon />
            </Tooltip>
          ) : (
            <Tooltip title="Click to open" arrow>
              <ChevronRightIcon />
            </Tooltip>
          )}
        </IconButton>
      </div>
    </Drawer>
  );
}
