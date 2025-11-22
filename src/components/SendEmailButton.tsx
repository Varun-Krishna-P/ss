import { Email } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React from "react";
import EmailForm from "./email/EmailForm";
import theme from "../constants/theme";

type SendEmailProps = {
  onOpen: () => void;
  onClose: () => void;
  open?: boolean;
};
const SendEmailButton = ({ onOpen, onClose, open }: SendEmailProps) => {
  return (
    <>
      <Box>
        <Button
          className="floating-button"
          onClick={onOpen}
          startIcon={<Email />}
          variant="outlined"
          sx={{
            position: "fixed",
            bottom: 60,
            right: 20,            
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            zIndex: 1000,
            minWidth: 0,
            fontSize: 20,
            "&:hover": {
              backgroundColor: theme.palette.primary[900],
              color: "#fff",
            },  
          }}
        >
          Email
        </Button>
      </Box>
      <Box>{open && <EmailForm onClose={onClose} open={open} />}</Box>
    </>
  );
};

export default SendEmailButton;
