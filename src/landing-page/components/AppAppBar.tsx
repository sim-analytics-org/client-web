import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
// import ColorModeIconDropdown from '../../shared-theme/ColorModeIconDropdown';
import Sitemark from '../../shared-theme/SitemarkIcon';
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../auth/AuthContext';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const { token } = useAuthContext();

  const navigate = useNavigate();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Sitemark />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <a href="#about">
                <Button variant="text" color="info" size="small">
                  About
                </Button>
              </a>
              <a href="#details">
                <Button variant="text" color="info" size="small">
                  Details
                </Button>
              </a>
              <a href="#pricing">
                <Button variant="text" color="info" size="small">
                  Pricing
                </Button>
              </a>
              <a href="#testimonials">
                <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
                  Testimonials
                </Button>
              </a>
              <a href="#faq">
                <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
                  FAQ
                </Button>
              </a>

              <a href="/contact"  target="_blank" rel="noopener noreferrer">
                <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
                  Contact Us
                </Button>
              </a>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            {
              token === null ?
                <>
                  <Button color="primary" variant="text" size="small" onClick={() => { navigate('/login') }}>
                    Sign in
                  </Button>
                  <Button color="primary" variant="contained" size="small" onClick={() => { navigate('/signup') }}>
                    Sign up
                  </Button>
                </>
                :
                <Button color="primary" variant="contained" size="small" onClick={() => { navigate('/account') }}>
                  Go to account
                </Button>
            }

          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <MenuItem><a href="#about" onClick={toggleDrawer(false)}>About</a></MenuItem>
                <MenuItem><a href="#details" onClick={toggleDrawer(false)}>Details</a></MenuItem>
                <MenuItem><a href="#pricing" onClick={toggleDrawer(false)}>Pricing</a></MenuItem>
                <MenuItem><a href="#testimonials" onClick={toggleDrawer(false)}>Testimonials</a></MenuItem>
                <MenuItem><a href="#faq" onClick={toggleDrawer(false)}>FAQ</a></MenuItem>
                <MenuItem><a href="/contact" target="_blank" rel="noopener noreferrer" onClick={toggleDrawer(false)}>Contact Us</a></MenuItem>
                <Divider sx={{ my: 3 }} />
                {
                  token === null ?
                    <>
                      <MenuItem>
                        <Button color="primary" variant="contained" fullWidth onClick={() => { navigate('/signup') }}>
                          Sign up
                        </Button>
                      </MenuItem>
                      <MenuItem>
                        <Button color="primary" variant="outlined" fullWidth onClick={() => { navigate('/login') }}>
                          Sign in
                        </Button>
                      </MenuItem>
                    </>
                    :
                    <Button color="primary" variant="contained" fullWidth onClick={() => { navigate('/account') }}>
                      Go to account
                    </Button>
                }
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
