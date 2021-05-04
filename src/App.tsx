import { Route } from "wouter";
import { ThemeProvider } from "styled-components";

// providers
import SearchProvider from "store/search.context";

// screens
import Home from "pages/Home";
import Song from "pages/Song";

// components
import Navbar from "components/Navbar";

import GlobalStyles from "styles/global";
// theme
import theme from "styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Navbar />

      <SearchProvider>
        <Route path="/">
          <Home />
        </Route>

        <Route path="/song/:id">{(params) => <Song id={params.id} />}</Route>
      </SearchProvider>
    </ThemeProvider>
  );
};

export default App;
