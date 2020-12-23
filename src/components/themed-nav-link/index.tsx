/** @jsxImportSource theme-ui */
import * as React from 'react';
import * as styles from './index.styles';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { Flex } from 'theme-ui';

const ThemedNavLink: React.FC<NavLinkProps> = (props) => {
  return (
    <Flex sx={styles.themedNavLinkContainerCss}>
      <NavLink sx={styles.navLinkCss} {...props} />
    </Flex>
  );
};

export default ThemedNavLink;
