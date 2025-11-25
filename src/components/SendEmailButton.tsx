import { Email } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import EmailForm from "./email/EmailForm";
import theme from "../constants/theme";
import AppAlert from "./AppAlert";
import AlertDataProps from "../constants/AlertProps";

type SendEmailProps = {
  onOpen: () => void;
  onClose: () => void;
  open?: boolean;
};

const SendEmailButton = ({ onOpen, onClose, open }: SendEmailProps) => {
  const [data, setData] = useState<AlertDataProps | null>(null);
  const handleData = (alertData: AlertDataProps) => setData(alertData);
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
      <Box>{open && <EmailForm onClose={onClose} open={open} handleData={handleData} />}</Box>
      <Box>
        {
      data && data.success && (
        <AppAlert
          message="Email sent successfully! We will reach out to you shortly!"
          severity="success"
        />
      )
    }
    {
      data && data.error && (
        <AppAlert
          message={`Failed to send email. Please try again later. ${data.error}`}
          severity="error"
        />
      )
    }
        
      </Box>
    </>
  );
};

export default SendEmailButton;
