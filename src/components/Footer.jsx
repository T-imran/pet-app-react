// src/components/Footer.jsx
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'primary.main', p: 2, mt: 'auto' }}>
            <Typography variant="body1" color="white" align="center">
                © {new Date().getFullYear()} My Vite React App
            </Typography>
        </Box>
    );
};

export default Footer;
