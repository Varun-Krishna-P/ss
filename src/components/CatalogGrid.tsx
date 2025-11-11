// src/components/CatalogGrid.tsx
import React from 'react';
import {Grid, GridProps, Card, CardMedia, CardContent, Typography, Chip } from '@mui/material';
import { graphql, useStaticQuery } from 'gatsby';


type CatalogProps = {
    name: string,
    short_name: string,
    image_path: string,
    description: string,
}

const CatalogGrid: React.FC = () => {
    const data = useStaticQuery(graphql`
    query {
      allCatalogYaml {
        nodes {
          name
          short_name
          image_path
          description
        }
      }
    }
  `);

  const catalog = data.allCatalogYaml.nodes;
  const gridProps: GridProps = {}

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
              <Typography variant="body2" color="text.secondary">
                <Chip label={item.short_name} color="primary" variant="outlined" />
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{marginTop: 1}}>
                {item.description ?? <br/>}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CatalogGrid;