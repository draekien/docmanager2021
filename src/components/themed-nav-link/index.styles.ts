import { ThemeUIStyleObject } from 'theme-ui';

export const themedNavLinkContainerCss: ThemeUIStyleObject = {
  px: 'sm',
  py: 'xs',
};

export const navLinkCss: ThemeUIStyleObject = {
  textDecoration: 'none',
  color: 'primary',
  ':hover': {
    color: 'primary-hover',
  },
  ':active': {
    color: 'primary-active',
  },
  '&.active': {
    color: 'secondary',
  },
};
