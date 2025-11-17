import React from 'react';
import { AppBar, Toolbar, Typography, Container, Button, ThemeProvider, CssBaseline } from '@mui/material';
import { Link } from 'gatsby';
import theme from '../constants/theme';
import { useAppConfig } from '../hooks/useAppConfig';

type childrenProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: childrenProps) => {
  const {site_name} = useAppConfig();
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" sx={{backgroundColor: theme.palette.primary[900]}}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }} component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}  >
            {site_name}
          </Typography>
          <Button color="inherit" component={Link} to="/catalog">Catalog</Button>
          <Button color="inherit" component={Link} to="/payment">Payment</Button>
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