import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import HomeIcon from '@mui/icons-material/Home';

const PageTitle: React.FC<{ title: string }> = ({ title }) => {
  return (

    <Box sx={{mb: 4}}>
        <Container>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography
              variant="h3"
              component="h1"
              sx={{ fontWeight: "bold", mb: 4, color: "primary.main" }}
            >
              {title}
            </Typography>
            <Button variant="outlined" color="primary" href="/" startIcon={<HomeIcon />}>
              Home
            </Button>
          </Stack>
        </Container>
      </Box>    
  );
}
export default PageTitle;