import { Box, Typography } from '@mui/material';
import React from 'react';
import { useAppConfig } from '../hooks/useAppConfig';

function WelcomeSection() {
  const { site_name, tagline } = useAppConfig();
  
  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 6,
        px: 2,
        maxWidth: 800,
        mx: 'auto',
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: 'bold',
          color: 'primary.main',
          mb: 1,
        }}
      >
        Welcome to {site_name}
      </Typography>

      <Typography
        variant="subtitle1"
        component="em"
        sx={{
          display: 'block',
          fontStyle: 'italic',
          color: 'text.secondary',
          mb: 3,
        }}
      >
        — {tagline}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: 'text.primary',
          lineHeight: 1.8,
        }}
      >
        Step into a serene space dedicated to nurturing your mind, body, and spirit through the timeless
        practices of <strong>Learning Sloka Online</strong> and <strong>Yoga</strong>. Here, we honor the sacred rhythms
        of Sanskrit verses and the graceful flow of yoga to create harmony within and around you.
      </Typography>
    </Box>
  );
}

export default WelcomeSection;
