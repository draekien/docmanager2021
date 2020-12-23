/** @jsxImportSource theme-ui */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';

import App from './app';
import { DraekienTheme } from './theme/theme';

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <ThemeProvider theme={DraekienTheme}>
          <App />
        </ThemeProvider>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

render();
