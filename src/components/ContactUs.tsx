import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import React from 'react';

import contact from "../data/contact.yml";



console.log(contact)
function ContactUs() {
  return (
    <Box
      sx={{
        py: 6,
        px: 3,
        maxWidth: 800,
        mx: 'auto',
        textAlign: 'center',
      }}
    >
      {/* Header Section */}
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: 'bold',
          color: 'primary.main',
          mb: 2,
        }}
      >
        Contact Us
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{
          fontStyle: 'italic',
          color: 'text.secondary',
          mb: 4,
        }}
      >
        — We’d love to hear from you. Whether you have questions about our Sloka and Yoga programs, 
        or just want to say hello, we’re here to help.
      </Typography>

      {/* Contact Table */}
      <TableContainer
        component={Paper}
        elevation={3}
        sx={{
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Table>
          <TableBody>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 'bold',
                  bgcolor: 'primary.light',
                  color: 'primary.contrastText',
                  width: '40%',
                }}
              >
                📞 Phone
              </TableCell>
              <TableCell>+91 98765 43210</TableCell>
            </TableRow>

            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 'bold',
                  bgcolor: 'primary.light',
                  color: 'primary.contrastText',
                }}
              >
                📧 Email
              </TableCell>
              <TableCell>info@yourwebsite.com</TableCell>
            </TableRow>

            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 'bold',
                  bgcolor: 'primary.light',
                  color: 'primary.contrastText',
                }}
              >
                📍 Address
              </TableCell>
              <TableCell>
                123 Serenity Lane, Wellness City,<br /> Bengaluru, Karnataka — 560001
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 'bold',
                  bgcolor: 'primary.light',
                  color: 'primary.contrastText',
                }}
              >
                🌐 Website
              </TableCell>
              <TableCell>www.yourwebsite.com</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default ContactUs;
