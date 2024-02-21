import { Box, ThemeProvider, useTheme } from "@mui/material";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/routes/Router";

function App() {
  const theme = useTheme();
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Box className="App">
          <Router />
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
