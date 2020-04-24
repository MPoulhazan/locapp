import React from "react";
import Login from "../../components/login/login";
import "./loginPage.scss";
import { Grid, Paper } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Description, { DescriptionData } from "../../components/description/description";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
        },
    }),
);
const lableList: DescriptionData[] = [{
    image: "/assets/images/germe.svg",
    alt: "germe",
    title: "Vendez",
    description: "Vous êtes producteur ? Proposez vos produits sur la plateforme"
},
{
    image: "/assets/images/plant.svg",
    alt: "plant",
    title: "Trouvez",
    description: "Trouvez un producteur proche de chez vous"
},
{
    image: "/assets/images/partage.svg",
    alt: "partage",
    title: "Commandez",
    description: "Passez une commande auprès de vos producteurs favoris"
},
{
    image: "/assets/images/eau.svg",
    alt: "arrosage",
    title: "Respectez la planète",
    description: "Consomez responsable avec des produits locaux"
}];

export default function LoginPage() {

    const classes = useStyles();

    return (
        <div className="loginPage">
            <h1><span className="titre">Locapp</span>, trouvez un producteur à côté de chez vous !</h1>
            <Grid container spacing={3}>

                <Grid item xs={6}>
                    <Description data={lableList}></Description>
                </Grid>

                <Grid item xs={6}>
                    <Login></Login>
                </Grid>

            </Grid>
        </div>
    );
}
