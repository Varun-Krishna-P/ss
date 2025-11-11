import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import React from 'react';
import { usePaymentConfig } from '../hooks/usePaymentConfig';

function Payment() {
  const {perClass, tenClass, perMonth} = usePaymentConfig();
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
        Payment Information
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{
          fontStyle: 'italic',
          color: 'text.secondary',
          mb: 4,
        }}
      >
        — Fee structure for our classes!
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
                }}
              >
                Per Class Fee
              </TableCell>
              <TableCell>{perClass}</TableCell>
            </TableRow>
           
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 'bold',
                  bgcolor: 'primary.light',
                  color: 'primary.contrastText',
                }}
              >
                Per ten Class Fee
              </TableCell>
              <TableCell>{tenClass}</TableCell>
            </TableRow>
            
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 'bold',
                  bgcolor: 'primary.light',
                  color: 'primary.contrastText',
                }}
              >
                Per Month Fee
              </TableCell>
              <TableCell>
                {perMonth}
              </TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Payment;
