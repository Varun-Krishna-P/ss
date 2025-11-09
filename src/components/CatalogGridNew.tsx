// MyCardGrid.tsx
import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography, SxProps, Theme } from "@mui/material";

type Item = {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
};

type MyCardGridProps = {
  items: Item[];
};

export const MyCardGrid: React.FC<MyCardGridProps> = ({ items }) => {
  return (
    <Grid
      // grid container: we set columns (default is 12) and spacing
      container
      spacing={{ xs: 2, sm: 3, md: 4 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {items.map((item) => (
        <Grid
          // grid item: in v7, instead of xs={12} etc, use `size` prop
          key={item.id}
          size={{ xs: 4, sm: 4, md: 4 }} // meaning: xs:4/4→full width, sm:4/8→half, md:4/12→one-third
        >
          <Card sx={cardSx}>
            <CardMedia
              component="img"
              height="140"
              image={item.imageUrl}
              alt={item.title}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

const cardSx: SxProps<Theme> = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
};
