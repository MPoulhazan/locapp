import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff"
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#5AC8FA"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#FF6464"
    }
    // error: will use the default color
  }
});
