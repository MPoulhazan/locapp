import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./login.scss";
import withFirebaseAuth, {
  WrappedComponentProps
} from "react-with-firebase-auth";
import Typography from "@material-ui/core/Typography";
import firebase, {
  google_provider,
  facebook_provider
} from "../../firebaseConfig";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const firebaseAppAuth = firebase.auth();

const signInWithFacebook = () => {
  firebase.auth().signInWithPopup(facebook_provider);
};

const signInWithGoogle = () => {
  firebase.auth().signInWithPopup(google_provider);
};

var divStyle = {
  //backgroundImage: "url('/assets/images/login.png"
};

const Login = ({ signOut, user }: WrappedComponentProps) => (
  <div className="Login" style={divStyle}>
    <Card className="card">
      <CardContent>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className="paper">
            <div className="loginProvider">
              <Button
                onClick={signInWithFacebook}
                className="loginProviderBtn facebook"
                variant="contained"
              >
                Sign up with Facebook
              </Button>
              <Button
                className="loginProviderBtn google"
                onClick={signInWithGoogle}
                variant="contained"
              >
                Sign up with Google
              </Button>
            </div>
            <Typography component="h2" variant="h5">
              OR USE EMAIL
            </Typography>
            <form className="form" noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className="submit"
              >
                Sign In
              </Button>

              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </CardContent>
    </Card>
  </div>
);

export default withFirebaseAuth({
  firebaseAppAuth
})(Login);
