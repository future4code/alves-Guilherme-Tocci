import { createMuiTheme } from "@material-ui/core/styles";
import { neutralColor, primaryColor, secondaryColor,buttonColor1 } from "./colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    text: {
      main: neutralColor,
    },
    secondary: {
      main: secondaryColor,
    },
  },
});

export default theme