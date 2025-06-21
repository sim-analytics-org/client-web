import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';

const ContactUs: React.FC = () => {
    return (
        <Container maxWidth="md" sx={{ py: 6 }}>
            <Typography variant="h3" gutterBottom color="text.primary">
                Contact us
            </Typography>
            <Typography variant="body1" color="text.primary">
                You can contact us anytime at <b>SimAnalyticsWin@gmail.com</b> or <b>667-228-2754</b>
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Box textAlign="center">
                <Typography variant="caption" color="text.secondary">
                    © {new Date().getFullYear()} SimAnalytics. All rights reserved.
                </Typography>
            </Box>
        </Container>
    );
};

export default ContactUs;
