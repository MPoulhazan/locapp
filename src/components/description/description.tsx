import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import './description.scss';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
    },
    labels: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
      },
  }),
);
export interface DescriptionData{
  image : string;
  alt: string;
  title: string;
  description: string;
}
interface DescriptionProps{
  data : DescriptionData[];
}

export default function Description(props:DescriptionProps) {
    const classes = useStyles();

  return (
    <div  className="items" >
    
    <List className={classes.labels}>
      {props.data.map(description => {
        return ( <ListItem>
          <ListItemAvatar>
            <Avatar src={description.image} alt={description.alt}>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={description.title} secondary={description.description}/>
        </ListItem>)
       
      })}
      
    </List>
    </div>
  );
}