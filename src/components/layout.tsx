import React from 'react';
import { AppBar, Toolbar, Typography, Container, Button, ThemeProvider, CssBaseline } from '@mui/material';
import { Link } from 'gatsby';
import theme from '../constants/theme';
import { useAppConfig } from '../hooks/useAppConfig';

type childrenProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: childrenProps) => {
  const {site_name, logo_path} = useAppConfig();
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" sx={{backgroundColor: theme.palette.primary[900]}}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, display: 'flex', alignItems: "center", color: "inherit" }} component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}  >
            <img
              src={logo_path}
              alt={site_name}
              style={{ height: 40, objectFit: 'contain', borderRadius: "100%", marginRight: 10 }}
            /> {site_name}
          </Typography>
          <Button color="inherit" component={Link} to="/catalog">Slokam</Button>
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