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
const rightList:DescriptionData[] = [{
  image : "/assets/images/germe.svg",
  alt: "germe",
  title: "Suivis",
  description: "Suivis complets et détaillés de la plantation à la récolte"
  },
{
  image : "/assets/images/plant.svg",
  alt: "plant",
  title: "Récolte",
  description: "Indication du meilleur moment pour la récolte"
},
{
  image: "/assets/images/partage.svg",
  alt: "partage",
  title: "Partage",
  description: "Consulte et échange avec la communauté de Pot'ageurs"
}];
const leftList :DescriptionData[]= [{
  image : "/assets/images/eau.svg",
  alt: "arrosage",
  title: "Arrosage",
  description: "Réception d'alertes lorsqu'il est l'heure d'arroser tes plants"
  },
{
  image : "/assets/images/soleil.svg",
  alt: "soleil",
  title: "Météo",
  description: "Surveillance de la météo en temps réel afin d'optimiser la pousse"
},
{
  image: "/assets/images/library.svg",
  alt: "livre",
  title: "Savoir",
  description: "Accès à une base complète d'infos sur le jardinage"
}];
export default function LoginPage() {
  return (
    <div className="loginPage">
      <h1><span className="titre">Pot'ager</span>, ton assistant potager à tes côtés !</h1>
      <Grid container spacing={3}>
        
      <Grid item xs={3}>
      <Description data={leftList}></Description>
        </Grid>
        <Grid item xs={3}>
      <Description data={rightList}></Description>
        </Grid>
        
        
       
        <Grid item xs={6}>
          <Login></Login>
        </Grid>

</Grid>   
</div>
  );
}
