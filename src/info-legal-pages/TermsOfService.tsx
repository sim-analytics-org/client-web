import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';

const TermsOfService: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom color="text.primary">
        Terms of Service
      </Typography>
      <Typography variant="body1" color="text.primary">
        Welcome to <b>SimAnalytics!</b> By using our services, you agree to the following terms and conditions:
      </Typography>

      <hr />

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }} color="text.primary">
        Sales and Refund Policy
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ mt: 4 }} color="text.primary">
        All Sales Are Final
      </Typography>
      <Typography variant="body1" color="text.primary">
        Due to the nature of our services and the delivery of digital handicapping content, <b>all purchases are non-refundable</b>. No exceptions will be made.
      </Typography>

      <hr />

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }} color="text.primary">
        Trials and Memberships
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ mt: 4 }} color="text.primary">
        Trial Conversions
      </Typography>
      <Typography variant="body1" color="text.primary">
         If a trial is offered, it will automatically convert to a paid membership at the end of the trial period <b>unless canceled before the trial expires</b>. 
      </Typography>

      <hr />

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }} color="text.primary">
        Subscription Renewals
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ mt: 4 }} color="text.primary">
        Automatic Renewals
      </Typography>
      <Typography variant="body1" color="text.primary">
        All subscriptions are set to automatically renew at the end of each billing cycle. To avoid future charges, you must cancel your subscription <b>prior to the renewal date</b> at: <a>SimAnalyticsWin@gmail.com</a>
      </Typography>

      <hr />

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }} color="text.primary">
        Account Responsibility
      </Typography>
      <Typography variant="body1" color="text.primary">
        It is the <b>customer’s responsibility</b> to manage their own account, including cancellation requests, updating payment details, and adjusting subscription preferences. SimAnalytics is not liable for charges incurred due to failure to manage your account.
      </Typography>

      <hr />
      <br />

      <Typography variant="body1" color="text.primary">
        By using <b>SimAnalytics</b>, you acknowledge that you have read, understood, and agreed to these terms.
      </Typography>

      <br />

      <Typography variant="body1" color="text.primary">
        If you have any questions, feel free to contact us at: <a>SimAnalyticsWin@gmail.com</a>
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

export default TermsOfService;
