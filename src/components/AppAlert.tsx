import { Snackbar, Alert } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import React, { ReactNode, useState } from "react";
import AlertProps from "../constants/AlertProps";

const AppAlert = ({ message, severity }: AlertProps) => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  let AlertIcon: ReactNode = "";
  switch (severity) {
    case "error":
      AlertIcon = <ErrorOutlineIcon fontSize="inherit" />;
      break;
    case "success":
      AlertIcon = <CheckIcon fontSize="inherit" />;
      break;
  }
  return (
    <Snackbar
      anchorOrigin={{vertical: "top", horizontal: "center"}}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1, // Ensure Snackbar appears above Dialog
      }}
    >
      <Alert
        icon={AlertIcon}
        severity={severity}
        variant="outlined"
        sx={{ bgcolor: "background.paper", width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AppAlert;
