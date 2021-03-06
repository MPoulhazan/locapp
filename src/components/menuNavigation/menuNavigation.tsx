import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import Toolbar from "../toolBar/toolBar";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles
} from "@material-ui/core/styles";
import { STRUCTURE_CONSTANT } from "../../constants";
import { routes } from "../../Routes";
import { RouteComponentProps, withRouter } from "react-router";

const drawerWidth = STRUCTURE_CONSTANT.drawerWidth;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },

    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none"
      }
    },
    menuIcon: {
        color: "#ffffff"
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      background: "#000000",
      color: "#ffffff"
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    }
  })
);

const ResponsiveDrawer = ({ history }: RouteComponentProps) => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
    path: string
  ) => {
    setSelectedIndex(index);
    history.push(path);
  };
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {routes.map((route, index) => {
          return (
            <ListItem
              button
              selected={selectedIndex === index}
              onClick={event => handleListItemClick(event, index, route.path)}
              key={route.title}
            >
              <ListItemIcon className={classes.menuIcon}>{route.icon}</ListItemIcon>
              <ListItemText primary={route.title} />
            </ListItem>
          );
        })}
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
        <Toolbar action={handleDrawerToggle}></Toolbar>
      
    </div>
  );
};
export default withRouter(ResponsiveDrawer);
