import React from "react";
import { Theme } from "@material-ui/core";
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
interface ProfilePageProps {}
const ProfilePage = ({ signOut, user }: WrappedComponentProps) => {
  return <p>Mon profil</p>;
};

export default withFirebaseAuth({
  firebaseAppAuth
})(ProfilePage);
