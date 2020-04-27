import React from "react";
import withFirebaseAuth, {
	WrappedComponentProps
} from "react-with-firebase-auth";
import "firebase/auth";
import "./App.scss";
import NavigationMenu from "./components/menuNavigation/menuNavigation";
import firebase from "./firebaseConfig";
import LoginPage from "./pages/loginPage/loginPage";
import Main from "../src/pages/main";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./theme";
import { BrowserRouter } from "react-router-dom";
import SimpleCard from "../src/components/cards/simpleCard/simpleCard";
import AddButton from "../src/components/addButton/addButton";
import basketService from "./shared/service/basket-service";

const firebaseAppAuth = firebase.auth();

// const service = basketService();

const App = ({ user }: WrappedComponentProps) => (
	<BrowserRouter>
		<ThemeProvider theme={theme}>
			<div className="App">
				{user ? (
					<div>
						<NavigationMenu />
						<Main></Main>
						<div id="conteneur">
								<SimpleCard></SimpleCard>
						</div>
						<AddButton></AddButton>
					</div>
				) : (
					<LoginPage></LoginPage>
				)}
			</div>
		</ThemeProvider>
	</BrowserRouter>
);

/** Wrap it */
export default withFirebaseAuth({
	firebaseAppAuth
})(App);
