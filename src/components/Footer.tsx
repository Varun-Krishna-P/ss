import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { useAppConfig } from "../hooks/useAppConfig";
import theme from "../constants/theme";

const Footer = () => {
  const { site_name } = useAppConfig();
  return (
    
    <Paper elevation={3} >
    <Box>
      <Typography
        variant="body2"
        align="center"
        sx={{
          py: 2,
          backgroundColor: theme.palette.primary[900],
          color: theme.palette.getContrastText(theme.palette.primary[600]),
          textAlign: "center",
          position: "fixed",
          bottom: 0,
          width: "100%",
        }}
      >
        &copy;
        {site_name} {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
    </Paper>
  );
};

export default Footer;
