import { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  CircularProgress,
  Alert,
} from '@mui/material';
import Grid, { type GridProps } from '@mui/material/Grid';
import { ADMIN_DETAILS_URL } from '../constants';

type User = {
  _id: string;
  email: string;
  name?: string;
  fullName?: string;
  phone: string;
  date?: number;
  subscriptionPlan?: string;
};

type ApiResponse = {
  freepickpeople: User[] | null;
  monthlyUsers: User[] | null;
  yearly: User[] | null;
};

export default function AdminPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<ApiResponse | null>(null);

  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(ADMIN_DETAILS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        setError('Invalid credentials. Please try again.');
        setData(null);
      } else {
        const result = await res.json();
        setData(result);
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const renderUserCard = (user: User) => (
    // <Grid item xs={12} sm={6} md={4} key={user._id}>
    <Grid {...({ item: true, xs: 12, sm: 6, md: 4 } as GridProps)} key={user._id}>
      <Card>
        <CardContent>
          <Typography variant="h6">{user.name || user.fullName}</Typography>
          <Typography variant="body2">Email: {user.email}</Typography>
          <Typography variant="body2">Phone: {user.phone}</Typography>
          {user.subscriptionPlan && (
            <Typography variant="body2">Plan: {user.subscriptionPlan}</Typography>
          )}
          {user.date && (
            <Typography variant="body2">
              Signup: {new Date(user.date).toLocaleString()}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Grid>
  );

  const renderUserSection = (title: string, users: User[] | null) => {
    if (!users || users.length === 0) return (
        <Typography variant="h6" gutterBottom color="text.primary">
          There are no {title} at the moment
        </Typography>
    );
    return (
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom color="text.primary">
          {title}
        </Typography>
        <Grid container spacing={2}>
          {users.map(renderUserCard)}
        </Grid>
      </Box>
    );
  };

  if (loading) {
    return (
      <Container maxWidth="sm" sx={{ mt: 10, textAlign: 'center' }}>
        <CircularProgress />
        <Typography sx={{ mt: 2 }}>Checking credentials...</Typography>
      </Container>
    );
  }

  if (!data) {
    return (
      <Container maxWidth="sm" sx={{ mt: 10 }}>
        <Typography variant="h4" gutterBottom color="text.primary">
          Admin Login
        </Typography>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
          <Button variant="contained" onClick={handleLogin}>
            Login
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4, mb: 8 }}>
      <Typography variant="h4" gutterBottom color="text.primary">
        Admin Dashboard
      </Typography>

      {renderUserSection('Free Pick Users', data.freepickpeople)}
      {renderUserSection('Monthly Subscribers', data.monthlyUsers)}
      {renderUserSection('Yearly Subscribers', data.yearly)}
    </Container>
  );
}
