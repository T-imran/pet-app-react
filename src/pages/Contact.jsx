// src/pages/Contact.jsx
import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const Contact = () => {
    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Contact Us
            </Typography>
            <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
                <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    type="email"
                />
                <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    margin="normal"
                    multiline
                    rows={4}
                />
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    Submit
                </Button>
            </Box>
        </Container>
    );
};

export default Contact;
