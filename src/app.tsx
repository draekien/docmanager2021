/** @jsxImportSource theme-ui */
import * as React from 'react';
import * as styles from './app.styles';
import { Route, Switch } from 'react-router-dom';
import { Box, useColorMode } from 'theme-ui';
import Nav from './components/nav';
import BrowsePage from './pages/browse';

const App: React.FC = () => {
  const [, setColorMode] = useColorMode();

  React.useEffect(() => {
    setColorMode('dark');
  }, []);

  return (
    <Box sx={styles.appContainerCss}>
      <Nav />
      <Switch>
        <Route path="/add">
          <div>add</div>
        </Route>
        <Route path="/search">
          <div>search</div>
        </Route>
        <Route path="/settings">
          <div>settings</div>
        </Route>
        <Route path="/">
          <BrowsePage />
        </Route>
      </Switch>
    </Box>
  );
};

export default App;
