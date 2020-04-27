import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        margin: "20px",
        flexGrow: 1,
    },
    media: {
        height: 140,
    },
    cardActions: {
        display: "flex",
        justifyContent: 'center',
    },
    iconsContainer: {
        display: "flex",
        justifyContent: 'flex-end',
        position: 'absolute',
        right: '5px',
        top: '5px'
    },
    icons: {
        width: '32px',
        height: '32px'
    }
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <div className={classes.iconsContainer}>
                    <img src="/assets/images/vegan.png" className={classes.icons} alt="Vegan" />
                    <img src="/assets/images/bio.png" className={classes.icons} alt="Bio" />
                </div>
                <CardMedia
                    className={classes.media}
                    image="/assets/images/basketexample.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Gros poireau dégorgé
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        5 bottes de poireaux et 2kg de courgettes.
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">Je réserve </Button>
            </CardActions>
        </Card>
    );
}