// src/components/CatalogGrid.tsx
import React, { useState } from 'react';
import {Grid, GridProps, Card, CardMedia, CardContent, Typography, Chip, Box, Button } from '@mui/material';
import { useCatalogConfig } from '../hooks/useCatalogConfig';
import PriceDetailsDialog from './PriceDetailsDialog';
import { CatalogProps } from '../types/Catalog';

const CatalogGrid: React.FC = () => {
  const catalog = useCatalogConfig()
  const [open, setOpen] = useState(false)
  const [catalotItem, setCatalogItem] = useState<CatalogProps | null>(null)

  const handleOpen = (item: CatalogProps) => {
    setOpen(true)
    setCatalogItem(item)
  }
  const handleClose = () => setOpen(false)
  return (
    <Grid container spacing={4} justifyContent="center">
      {catalog.map((item: CatalogProps) => (
        <Grid key={item.short_name} size={{xs: 12, sm:6, md:4}}>
          <Card elevation={3}>
            <CardMedia
              component="img"
              height="180"
              width="220"
              image={item.image_path}
              alt={item.name}
              sx={{objectFit: "contain", maxHeight: "100%", maxWidth: "100%"}}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {item.name}
              </Typography>
              <Box>
                <Chip label={item.short_name} color="primary" variant="outlined" />
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{marginTop: 1}}>
                {item.description ?? <br/>}
              </Typography>
              <Box sx={{mt: "2%"}}>
                <Button variant="contained" onClick={() => handleOpen(item)}>View Details</Button>
              </Box>
              {open && <PriceDetailsDialog open={open} onClose={handleClose} catalog={catalotItem} />}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CatalogGrid;