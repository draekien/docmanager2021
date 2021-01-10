/** @jsxImportSource theme-ui */
import { DraekienUi } from 'draekien-ui';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import App from './app';

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <DraekienUi useToastContext>
          <App />
        </DraekienUi>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

render();
