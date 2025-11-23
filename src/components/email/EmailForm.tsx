import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { useContactConfig } from "../../hooks/useContactConfig";
import { useAppConfig } from "../../hooks/useAppConfig";
import AppAlert from "../AppAlert";
import AlertDataProps from "../../constants/AlertProps";
type EmailFieldProps = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const EmailForm = ({
  onClose,
  open,
  handleData
}: {
  onClose: () => void;
  open: boolean;
  handleData: (data: AlertDataProps) => void;
}) => {
  const [form, setForm] = useState<EmailFieldProps>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<EmailFieldProps>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { email: from_email, app_email } = useContactConfig();
  const { site_name } = useAppConfig();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors: EmailFieldProps = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.phone.trim()) {
      newErrors.phone = "Phone is required.";
    } else if (!/^\+?[0-9\s\-()]{7,}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid phone number.";
    }
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter a valid email.";
    if (!form.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    // return Object.keys(newErrors).length === 0;
    return !Object.values(newErrors).some((msg) => msg !== "");
  };

  const handleSubmit = async () => {
    // e.preventDefault();
    if (!validate()) return;
    // send email logic here
    const mailBodyContent = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      message: form.message,
      subject: `New Request from ${form.name}`,
      from_email,
      site_name,
      app_email,
    };
    const response = await fetch("/.netlify/functions/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mailBodyContent),
    });

    const data = await response.json();
    handleData(data);
    console.log("Email sent:", data);
    onClose();
  };
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Send Email</DialogTitle>
      <DialogContent dividers>
        <Stack spacing={2} mt={1}>
          <TextField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
            required
            error={Boolean(errors.name)}
            helperText={errors.name}
          />
          <TextField
            label="Phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            fullWidth
            required
            error={Boolean(errors.phone)}
            helperText={errors.phone}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            required
            error={Boolean(errors.email)}
            helperText={errors.email}
          />
          <TextField
            label="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            required
            error={Boolean(errors.message)}
            helperText={errors.message}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleSubmit}
          variant="outlined"
          startIcon={<SendIcon />}
        >
          Send
        </Button>
        <Button onClick={onClose} variant="outlined" color="secondary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EmailForm;
