
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/X';
import SitemarkIcon from '../../shared-theme/SitemarkIcon';
import { Instagram } from '@mui/icons-material';

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      {'Copyright © '}
      <Link color="text.secondary" href="#">
        SimAnalytics
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <SitemarkIcon />
            {/* <Typography variant="body2" gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
              Join the newsletter
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
              Subscribe for weekly updates. No spams ever!
            </Typography>
            <InputLabel htmlFor="email-newsletter">Email</InputLabel>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                id="email-newsletter"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                aria-label="Enter your email address"
                placeholder="Your email address"
                slotProps={{
                  htmlInput: {
                    autoComplete: 'off',
                    'aria-label': 'Enter your email address',
                  },
                }}
                sx={{ width: '250px' }}
              />
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ flexShrink: 0 }}
              >
                Subscribe
              </Button>
            </Stack> */}
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
            Product
          </Typography>
          <Link color="text.secondary" variant="body2" href="#">
            Features
          </Link>
          <Link color="text.secondary" variant="body2" href="#testimonials">
            Testimonials
          </Link>
          <Link color="text.secondary" variant="body2" href="#">
            Highlights
          </Link>
          <Link color="text.secondary" variant="body2" href="#pricing">
            Pricing
          </Link>
          <Link color="text.secondary" variant="body2" href="#faq">
            FAQs
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
            Company
          </Typography>
          <Link color="text.secondary" variant="body2" href="#">
            About us
          </Link>
          {/* <Link color="text.secondary" variant="body2" href="#">
            Careers
          </Link> */}
          {/* <Link color="text.secondary" variant="body2" href="#">
            Press
          </Link> */}
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
            Legal
          </Typography>
          <Link color="text.secondary" variant="body2" href="/terms-of-service" target="_blank" rel="noopener noreferrer">
            Terms
          </Link>
          <Link color="text.secondary" variant="body2" href="/privacy-policy" target="_blank" rel="noopener noreferrer">
            Privacy
          </Link>
          <Link color="text.secondary" variant="body2" href="/contact" target="_blank" rel="noopener noreferrer">
            Contact
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Link
            color="text.secondary"
            variant="body2"
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer">
            Privacy Policy
          </Link>
          <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link
            color="text.secondary"
            variant="body2"
            href="/terms-of-service"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service
          </Link>
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
            667-228-2754
          </Typography>
          <Copyright />
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
            <Link color="text.secondary"
              variant="body2"
              href="/admin"
              target="_blank"
              rel="noopener noreferrer">Admin panel</Link>
          </Typography>
        </div>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{ justifyContent: 'left', color: 'text.secondary' }}
        >
          <IconButton
            color="inherit"
            size="small"
            href="https://www.instagram.com/simanalytics.win?igsh=NHJ3NXhrN28wc2Zh&utm_source=qr"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://x.com/simanalyticswin?s=21"
            aria-label="X"
            sx={{ alignSelf: 'center' }}
          >
            <TwitterIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
