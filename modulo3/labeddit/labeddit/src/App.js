import React from "react";
import {Router} from "./routes/Router";
import theme from "./components/theme";
import { ThemeProvider } from "@material-ui/core";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
     <Router></Router>
    </ThemeProvider>
  );
}

export default App;
