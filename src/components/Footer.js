import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Twitter from '@material-ui/icons/Twitter';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Github from '@material-ui/icons/GitHub';
import { BottomNavigationAction } from '@material-ui/core';

const useStyles = makeStyles({
  bottomNavContainer: {
    background: '#222',
  },
  root: {
    '& .MuiSvgIcon-root': {
      fill: 'tan',
      '&:hover': {
        fill: 'tomato',
        fontSize: '1.8rem',
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction
        href='https://www.linkedin.com/in/damianldiego/'
        target='_blank'
        rel='noreferrence'
        icon={<LinkedIn />}
        className={classes.root}
      />
      <BottomNavigationAction
        href='https://twitter.com/DamianLDiego'
        target='_blank'
        rel='noreferrence'
        icon={<Twitter />}
        className={classes.root}
      />
      <BottomNavigationAction
        href='https://github.com/damldieg'
        target='_blank'
        rel='noreferrence'
        icon={<Github />}
        className={classes.root}
      />
    </BottomNavigation>
  );
};
export default Footer;
