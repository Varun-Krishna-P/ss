import { Box, Typography } from '@mui/material';
import React from 'react';

function WelcomeSection() {
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
        Welcome to My Website
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
        — Where Ancient Wisdom Meets Modern Well-being.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: 'text.primary',
          lineHeight: 1.8,
        }}
      >
        Step into a serene space dedicated to nurturing your mind, body, and spirit through the timeless
        practices of <strong>Sloka Chanting</strong> and <strong>Yoga</strong>. Here, we honor the sacred rhythms
        of Sanskrit verses and the graceful flow of yoga to create harmony within and around you.
      </Typography>
    </Box>
  );
}

export default WelcomeSection;
