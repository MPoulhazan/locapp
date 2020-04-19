import React, { Component } from "react";
import { STRUCTURE_CONSTANT } from "../../constants";
import { useTheme, Theme, Button } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";
import withFirebaseAuth, {
  WrappedComponentProps
} from "react-with-firebase-auth";
import firebaseConfig from "../../firebaseConfig";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    }
  })
);

  



const firebaseAppAuth = firebaseConfig.auth();
interface HomePageProps {}
const HomePage = ({ signOut, user }: WrappedComponentProps) => {
  return (
    <Button onClick={signOut} variant="contained" color="primary">
      Se déconnecter
    </Button>
  );
};

export default withFirebaseAuth({
  firebaseAppAuth
})(HomePage);
