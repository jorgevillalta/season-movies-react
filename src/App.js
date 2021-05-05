import React from 'react';
import { Provider } from 'react-redux';
import { createGlobalStyle, ThemeProvider } from 'styled-components/macro';
import MoviePage from './containers/MoviePage';

// import MoviePage from './containers/MoviePage';
import store from './store';

// import { Button, Card, H5, Classes } from '@blueprintjs/core';
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;

//
const theme = {
  colors: {
    lightGray1: '#CED9E0',
    lightGray2: '#D8E1E8',
    lightGray3: '#E1E8ED',
    lightGray4: '#EBF1F5',
    lightGray5: '#F5F8FA'
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <>
          <MoviePage />
          <GlobalStyle />
        </>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
