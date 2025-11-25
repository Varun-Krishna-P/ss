import { Box, Card, CardContent, CardMedia, Chip, Grid, Typography } from "@mui/material"
import React from "react"
import { useActiveYogaList } from "../hooks/useActiveYogaList";


const YogaGrid: React.FC = () => {
    const entries = useActiveYogaList();
    return (
        <Grid container spacing={4} justifyContent="center">
            {entries.map((item: Yoga) => (
                <Grid key={item.short_name} size={{xs: 12, sm:6, md:4}}>
                    <Card elevation={3}>
                        <CardMedia
                        component="img"
                        height="180"
                        width="220"
                        image={item.image_path}
                        alt={item.title}
                        sx={{objectFit: "contain", maxHeight: "100%", maxWidth: "100%"}}
                        />
                        <CardContent>
                        <Typography variant="h6" gutterBottom>
                            {item.title}
                        </Typography>
                        <Box>
                            <Chip label={item.short_name} color="primary" variant="outlined" />
                        </Box>
                        <Typography variant="body2" color="text.secondary" sx={{marginTop: 1}}>
                            {item.description ?? <br/>}
                        </Typography>                        
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}
export default YogaGrid;