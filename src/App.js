import { Box, ThemeProvider, useTheme } from "@mui/material";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/routes/Router";
import { Provider } from "react-redux";
import { store } from "./components/redux/store";

function App() {
  const theme = useTheme();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Box className="App">
            <Router />
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
