'use client';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import './projects.scss';

const cards = [1, 2, 3, 4, 5, 6];

export default function Album() {
  return (
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />
      <main>
        <h1 className="centered-elements">Projects</h1>
        {/* hero unit */}
        <Container className="projects-container" maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className="card">
                  <CardMedia
                    component="div"
                    className="card-media"
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent className="card-content">
                    <Typography gutterBottom variant="h5" component="h2">
                      Project
                    </Typography>
                    <Typography>Sample Text</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Github</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
