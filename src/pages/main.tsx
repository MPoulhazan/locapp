import React from "react";
import { Switch, Route } from "react-router-dom";
import { routes } from "../Routes";
import { STRUCTURE_CONSTANT } from "../constants";

import {
  makeStyles,
  useTheme,
  Theme,
  createStyles
} from "@material-ui/core/styles";

const drawerWidth = STRUCTURE_CONSTANT.drawerWidth;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      marginLeft: drawerWidth,
      [theme.breakpoints.down("sm")]: {
        marginLeft: 0
      }
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    }
  })
);
interface MainProps {}

export default function Main(props: MainProps) {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <div className={classes.toolbar} />

      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={routeProps => {
              return React.createElement(route.component);
            }}
          />
        ))}
      </Switch>
    </main>
  );
}
