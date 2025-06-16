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
import { ACCOUNT_DETAILS_URL } from './constants'
import { useAuthContext } from './auth/AuthContext'
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
                        <Typography variant="h6" gutterBottom>
                            {(() => {
                                switch (user.subscriptionPlan) {
                                    case 'monthly':
                                        return 'Monthly Plan'
                                    case 'yearly':
                                        return 'Yearly Plan'
                                    default:
                                        return 'No Active Plan'
                                }
                            })()}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {user.subscriptionPlan === 'none'
                                ? "You are currently not subscribed to any billing cycle"
                                : `You are currently subscribed to the 
                            ${user.subscriptionPlan}
                            billing cycle.`}
                        </Typography>
                    </CardContent>
                </Card>
            )
        }

        return (
            <Grid container spacing={2}>
                {/* <Grid xs={12} md={6}> */}
                <Grid size={{ xs: 12, sm: 8, md: 6 }}>
                    <Card>
                        <CardHeader title="Monthly Plan" />
                        <CardContent>
                            <Typography>$10 / month</Typography>
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                                Billed monthly. Cancel anytime.
                            </Typography>
                            <Button variant="contained" fullWidth>
                                Choose Monthly
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                {/* <Grid item xs={12} md={6}> */}
                <Grid size={{ xs: 12, sm: 8, md: 6 }}>
                    <Card>
                        <CardHeader title="Yearly Plan" />
                        <CardContent>
                            <Typography>$100 / year</Typography>
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                                Save 17% with annual billing.
                            </Typography>
                            <Button variant="contained" fullWidth>
                                Choose Yearly
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        )
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
