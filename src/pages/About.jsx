// src/pages/About.jsx
import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                About Us
            </Typography>
            <Typography variant="body1">
                Information about your application or company.
            </Typography>
        </Container>
    );
};

export default About;
