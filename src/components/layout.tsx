import React from 'react';
import { AppBar, Toolbar, Typography, Container, Button, ThemeProvider } from '@mui/material';
import { Link } from 'gatsby';
import theme from '../constants/theme';

type childrenProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: childrenProps) => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{backgroundColor: theme.palette.primary[900]}}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My website
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/contact-us">Contact</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        {children}
      </Container>
      </ThemeProvider>
    </>
  );
};

export default Layout;