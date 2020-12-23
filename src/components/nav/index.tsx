/** @jsxImportSource theme-ui */
import * as React from 'react';
import * as styles from './index.styles';
import { Flex } from 'theme-ui';
import ThemedNavLink from '../themed-nav-link';

const Nav: React.FC = () => {
  return (
    <Flex as="nav" sx={styles.navContainerCss}>
      <ThemedNavLink to="/">Browse</ThemedNavLink>
      <ThemedNavLink to="/add">Add File</ThemedNavLink>
      <ThemedNavLink to="/search">Search</ThemedNavLink>
      <ThemedNavLink to="/settings">Settings</ThemedNavLink>
    </Flex>
  );
};

export default Nav;
