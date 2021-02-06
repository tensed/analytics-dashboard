import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1950f9",
    },
    secondary: {
      main: "#f79508",
      contrastText: "#fff",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
    active: {
      main: "rgb(247,149,8)",
    },
  },
});

export default theme;
