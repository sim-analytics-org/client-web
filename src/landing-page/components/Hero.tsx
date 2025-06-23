
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import visuallyHidden from '@mui/utils/visuallyHidden';
import { useState } from 'react';
import { SIGNUP_FOR_FREE_PICK_URL } from '../../constants';
import Toast from '../../shared-theme/Toast';

// const StyledBox = styled('div')(({ theme }) => ({
//   alignSelf: 'center',
//   width: '100%',
//   height: 400,
//   marginTop: theme.spacing(8),
//   borderRadius: (theme.vars || theme).shape.borderRadius,
//   outline: '6px solid',
//   outlineColor: 'hsla(220, 25%, 80%, 0.2)',
//   border: '1px solid',
//   borderColor: (theme.vars || theme).palette.grey[200],
//   boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
//   backgroundImage: `url('https://www.shutterstock.com/image-illustration/dynamic-stadium-large-modern-filled-600nw-2472452971.jpg')`,
//   backgroundSize: 'cover',
//   [theme.breakpoints.up('sm')]: {
//     marginTop: theme.spacing(10),
//     height: 700,
//   },
//   ...theme.applyStyles('dark', {
//     boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
//     backgroundImage: `url('https://www.shutterstock.com/image-illustration/dynamic-stadium-large-modern-filled-600nw-2472452971.jpg')`,
//     outlineColor: 'hsla(220, 20%, 42%, 0.1)',
//     borderColor: (theme.vars || theme).palette.grey[700],
//   }),
// }));

export default function Hero() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const [phoneErrorMessage, setPhoneErrorMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState('');

  const [toast, setToast] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({
    open: false,
    message: '',
    severity: 'success',
  });

  const showToast = (message: string, severity: 'success' | 'error') => {
    setToast({ open: true, message, severity });
  };

  const validateInputs = () => {
    let isValid = true;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!phone || !/(\d{3})-(\d{3})-(\d{4})/.test(phone)) {
      setPhoneError(true);
      setPhoneErrorMessage('Please enter a valid phone number in the format XXX-XXX-XXXX');
      isValid = false;
    } else {
      setPhoneError(false);
      setPhoneErrorMessage('');
    }

    if (!name || name.length < 1) {
      setNameError(true);
      setNameErrorMessage('Name is required.');
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage('');
    }

    return isValid;
  };


  const handleSubmit = async () => {
    if (!validateInputs()) {
      return;
    }
    if (nameError || emailError) {
      return;
    }

    const dataToSend = {
      name: name,
      email: email,
      phone: phone
    };

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const res = await fetch(SIGNUP_FOR_FREE_PICK_URL, {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(dataToSend),
      redirect: "follow"
    })
    if (res.ok) {
      showToast('Successfully registered for free pick!', 'success');
      setEmail('');
      setName('');
      setPhone('');
    } else {
      showToast('Error registering for a free pick', 'error');
    }
  };

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',

        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles('light', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            }}
          >
            Sim
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: 'inherit',
                color: 'primary.main',
                ...theme.applyStyles('dark', {
                  color: 'primary.light',
                }),
              })}
            >
              Analytics
            </Typography>
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
            }}
          >
            Join the SimAnalytics community and see why we are trusted as a top sports analytics group. Type in your information below to get a free pick!
          </Typography>
          <Stack
            // direction={{ xs: 'column', sm: 'row' }}
            direction={{ xs: 'column', sm: 'column' }}
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: '350px' } }}
          >
            <InputLabel htmlFor="name-hero" sx={visuallyHidden}>
              Name
            </InputLabel>
            <TextField
              id="name-hero"
              value={name}
              onChange={(e) => { setName(e.target.value) }}
              error={nameError}
              helperText={nameErrorMessage}
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your name"
              placeholder="Your name"
              fullWidth
              slotProps={{
                htmlInput: {
                  autoComplete: 'off',
                  'aria-label': 'Enter your name',
                },
              }}
            />

            <InputLabel htmlFor="email-hero" sx={visuallyHidden}>
              Email
            </InputLabel>
            <TextField
              id="email-hero"
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              error={emailError}
              helperText={emailErrorMessage}
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email"
              placeholder="Your email"
              fullWidth
              slotProps={{
                htmlInput: {
                  autoComplete: 'off',
                  'aria-label': 'Enter your email',
                },
              }}
            />

            <InputLabel htmlFor="phone-hero" sx={visuallyHidden}>
              Phone
            </InputLabel>
            <TextField
              id="phone-hero"
              value={phone}
              onChange={(e) => { setPhone(e.target.value) }}
              error={phoneError}
              helperText={phoneErrorMessage}
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your phone number"
              placeholder="Your phone number"
              fullWidth
              slotProps={{
                htmlInput: {
                  autoComplete: 'off',
                  'aria-label': 'Enter your phone number',
                },
              }}
            />

            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={handleSubmit}
              sx={{ minWidth: 'fit-content' }}
            >
              Get my free pick!
            </Button>
          </Stack>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ textAlign: 'center' }}
          >
            By clicking &quot;Get my free pick!&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography>
          <a href="#pricing">
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ minWidth: 'fit-content' }}
            >
              See VIP packages
            </Button>
          </a>
        </Stack>
        {/* <StyledBox id="image" /> */}
        <Toast
          open={toast.open}
          message={toast.message}
          severity={toast.severity}
          onClose={() => setToast((prev) => ({ ...prev, open: false }))}
        />
      </Container>
    </Box>
  );
}
