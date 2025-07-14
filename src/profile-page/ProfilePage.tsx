import { useEffect, useState } from 'react'
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Typography,
    Grid,
    CircularProgress,
    Button
} from '@mui/material'
import { ACCOUNT_DETAILS_URL } from '../constants'
import { useAuthContext } from '../auth/AuthContext'
import { Link as RouterLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

type UserProfile = {
    name: string
    email: string
    phone: string
    subscriptionPlan: 'monthly' | 'yearly' | 'none'
}

export default function ProfilePage() {
    const [user, setUser] = useState<UserProfile | null>(null)
    const [loading, setLoading] = useState(true)
    const { token, logout } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                const raw = JSON.stringify({
                    "token": token
                });
                const res = await fetch(ACCOUNT_DETAILS_URL, {
                    method: "POST",
                    headers: myHeaders,
                    body: raw,
                    redirect: "follow"
                })
                const data = await res.json()
                setUser(data)
            } catch (error) {
                console.error('Failed to load profile:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchUserProfile()
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" mt={5}>
                <CircularProgress />
            </Box>
        )
    }

    if (!user) {
        return (
            <Box display="flex" justifyContent="center" mt={5}>
                <Typography color="error">Failed to load user profile.</Typography>
            </Box>
        )
    }

    const renderPlanCard = () => {
        if (user.subscriptionPlan) {
            return (
                <Card>
                    <CardHeader title="Active Plan" />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            The SimAnalytics site does not directly keep track of your subscription and billing information.
                            That is handled by Stripe. To see and manage the status of your SimAnalytics picks subscription, click the
                            button below:
                        </Typography>
                        <a href="https://billing.stripe.com/p/login/14A5kF6EMdPQ8bucNP9IQ00" target="_blank" rel="noopener noreferrer">
                            <Button type="submit" variant="contained">
                                {'Manage Billing & Subscription'}
                            </Button>
                        </a>

                        <br />
                        <br />

                        <Typography variant="body2" color="text.secondary">
                            Click below to subscribe to the Monthly Picks plan ($199.99 per month). This will re-direct you to a separate checkout page.
                        </Typography>
                        <a href="https://buy.stripe.com/14A5kF6EMdPQ8bucNP9IQ00" target="_blank" rel="noopener noreferrer">
                            <Button type="submit" variant="contained">
                                {'Subscribe to the Monthly plan!'}
                            </Button>
                        </a>

                        <br />
                        <br />

                        <Typography variant="body2" color="text.secondary">
                            Click below to subscribe to the Yearly Picks plan ($999.99 per year). This will re-direct you to a separate checkout page.
                        </Typography>
                        <a href="https://buy.stripe.com/3cIbJ3gfm278gI05ln9IQ01" target="_blank" rel="noopener noreferrer">
                            <Button type="submit" variant="contained">
                                {'Subscribe to the Yearly plan!'}
                            </Button>
                        </a>
                    </CardContent>
                </Card>
            )
        }
    }

    return (
        <Box p={4}>
            <Typography variant="h4" gutterBottom color="text.primary">
                Profile
            </Typography>

            <Button
                variant="contained"
                color="primary"
                component={RouterLink}
                to="/"
                sx={{ mb: 3 }}
            >
                Back to Home
            </Button>

            <Grid container spacing={3} mb={4}>
                {/* <Grid item xs={12} md={4}> */}
                <Grid size={{ xs: 12, sm: 8, md: 6 }}>
                    <Card>
                        <CardHeader title="Name" />
                        <CardContent>
                            <Typography>{user.name}</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* <Grid item xs={12} md={4}> */}
                <Grid size={{ xs: 12, sm: 8, md: 6 }}>
                    <Card>
                        <CardHeader title="Email" />
                        <CardContent>
                            <Typography>{user.email}</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* <Grid item xs={12} md={4}> */}
                <Grid size={{ xs: 12, sm: 8, md: 6 }}>
                    <Card>
                        <CardHeader title="Phone" />
                        <CardContent>
                            <Typography>{user.phone}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Typography variant="h5" gutterBottom color="text.primary">
                Billing Plan
            </Typography>

            <Box mt={2}>{renderPlanCard()}</Box>

            <br />

            <Typography variant="h5" gutterBottom color="text.primary">
                Assistance
            </Typography>
            <Box mt={2}>
                <Card>
                    <CardHeader title="SimAnalytics Contact" />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            If in any case you need assistance creating or canceling your subscription, do not hesitate to reach out to <a>SimAnalyticsWin@gmail.com</a>
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

            <br />

            <Button
                variant="contained"
                color="error"
                onClick={handleLogout}
                fullWidth
                sx={{ mt: 6 }}
            >
                Log Out
            </Button>
        </Box>
    )
}
