
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function About() {

  return (
    <Container id="about" sx={{ py: { xs: 8, sm: 16 } }}>
      <Box sx={{ width: { sm: '100%', md: '100%' } }}>
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          About
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', mb: { xs: 2, sm: 4 } }}
        >
          For over 20 years, Sim Analytics has been delivering winning results for our clients, generating more than $35 million in profit through expert sports handicapping. We bring together a world-class team of professional handicappers and data analysts to deliver insights that consistently outperform the market.
          <br />
          <br />
          Our success isn’t luck — it’s built on a long-term edge powered by advanced AI models and analytics. These systems are carefully developed, rigorously tested, and continuously refined to adapt to changes in the sports betting landscape. By identifying high-value opportunities across all major sports, we help our clients win thousands of dollars monthly with sustainable, data-driven strategies.
          <br />
          <br />
          At Sim Analytics, we blend technology with experience. Our approach integrates proven money management principles, sharp risk analysis, and deep statistical insight. From team trends and matchup dynamics to weather, travel, and player motivation, we analyze every variable that can impact a game’s outcome.
          <br />
          <br />
          What sets Sim Analytics apart is not only our commitment to precision but our dedication to long-term profitability. Our edge doesn’t fade over time — it compounds. And we’re proud to equip clients with clear, confident picks rooted in real research and performance.
          <br />
          <br />
          Trust, transparency, and track record — that’s what defines Sim Analytics. Whether you're a veteran sports investor or just beginning your betting journey, our expertise and dedication make us the partner you can rely on for consistent results.
          <br />
          <br />
          Join Sim Analytics today and experience how elite data, disciplined strategy, and 20+ years of winning can transform the way you bet.
        </Typography>
      </Box>
    </Container>
  );
}
