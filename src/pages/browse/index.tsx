/** @jsxImportSource theme-ui */
import * as React from 'react';
import * as styles from './index.styles';
import { Box, Flex, Grid } from 'theme-ui';

const BrowsePage: React.FC = () => {
  return (
    <Box sx={styles.browsePageContainerCss}>
      <Flex>
        <h3>header</h3>
      </Flex>
      <Grid gap={2} columns={[2, '1fr 2fr']}>
        <Flex>
          <h4>Sidebar</h4>
        </Flex>
        <Flex>
          <h4>Main content</h4>
        </Flex>
      </Grid>
    </Box>
  );
};

export default BrowsePage;
