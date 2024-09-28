// src/pages/Home.jsx
import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent, CardActions } from '@mui/material';

const Home = () => {
    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Welcome to the Home Page
            </Typography>
            <Typography variant="body1" gutterBottom>
                This is a sample React Vite application using Material-UI for styling and components.
            </Typography>
            <Button variant="contained" color="primary">
                Get Started
            </Button>

            <Grid container spacing={4} sx={{ mt: 4 }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Feature 1
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Description of Feature 1.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Feature 2
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Description of Feature 2.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Feature 3
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Description of Feature 3.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;
