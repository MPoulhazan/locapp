import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    '@global': {
      body: {
        backgroundColor: theme.palette.background.paper,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    fab: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    snackbar: {
      [theme.breakpoints.down('xs')]: {
        bottom: 90,
      },
    },
  }),
);

export default function FabIntegrationSnackbar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      
         <div>   
        <Fab color="secondary" className={classes.fab}>
          <AddIcon />
        </Fab>
        
      </div>
    </React.Fragment>
  );
}
