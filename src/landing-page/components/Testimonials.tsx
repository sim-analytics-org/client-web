
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
// import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import { useColorScheme } from '@mui/material/styles';

const userTestimonials = [
  {
    // avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
    name: 'David',
    occupation: 'Sports Bettor',
    testimonial:
      "I have been sports betting for over 5 years and consistently lost thousands until I decided to give SimAnalytics a chance. I purchased the monthly package and was able to double my bankroll in weeks. I trusted their AI models and advice on how to effectively bet on sports. I have been part of the winning team for a year and a half now. I was able to profit 6 figures my first year and now am able to bet full time by trusting SimAnalytics.",
  },
  {
    // avatar: <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />,
    name: 'Sarah',
    occupation: 'Sports Fanatic',
    testimonial:
      "I was new to sports betting when I first decided to use a sports handicapping service. SimAnalytics has provided me with consistent profit and has been worth every single penny. I recommend purchasing the yearly package as it is cheaper and SimAnalytics provides a long term edge in every single sport. Every analysis is spot on and I never have to research a game myself anymore. The profits just roll in following Sim Analytics.",
  },
  {
    // avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />,
    name: 'Alex',
    occupation: 'Football Fan',
    testimonial:
      "SimAnalytics is the most transparent handicapping service in the industry. I no longer have to worry about what I am going to bet on 5 minutes before a game starts. SimAnalytics delivers plays in advance with in depth analysis, and covers every angle possible for each game. I have trusted SimAnalytics for over a decade now. The return on my investment has been bigger than anything in the stock market. Trust SimAnalytics and you won't regret it.",
  },
  // {
  //   // avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/4.jpg" />,
  //   name: 'Julia Stewart',
  //   occupation: 'Senior Engineer',
  //   testimonial:
  //     "I appreciate the attention to detail in the design of this product. The small touches make a big difference, and it's evident that the creators focused on delivering a premium experience.",
  // },
  // {
  //   // avatar: <Avatar alt="Travis Howard" src="/static/images/avatar/5.jpg" />,
  //   name: 'John Smith',
  //   occupation: 'Product Designer',
  //   testimonial:
  //     "I've tried other similar products, but this one stands out for its innovative features. It's clear that the makers put a lot of thought into creating a solution that truly addresses user needs.",
  // },
  // {
  //   // avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/6.jpg" />,
  //   name: 'Daniel Wolf',
  //   occupation: 'CDO',
  //   testimonial:
  //     "The quality of this product exceeded my expectations. It's durable, well-designed, and built to last. Definitely worth the investment!",
  // },
];

// const darkModeLogos = [
//   'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg',
//   'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
//   'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg',
//   'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg',
//   'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg',
//   'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg',
// ];

// const lightModeLogos = [
//   'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
//   'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
//   'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
//   'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
//   'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg',
//   'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
// ];

// const logoStyle = {
//   width: '64px',
//   opacity: 0.3,
// };

export default function Testimonials() {
  // const { mode, systemMode } = useColorScheme();

  // let logos;
  // if (mode === 'system') {
  //   if (systemMode === 'light') {
  //     logos = lightModeLogos;
  //   } else {
  //     logos = darkModeLogos;
  //   }
  // } else if (mode === 'light') {
  //   logos = lightModeLogos;
  // } else {
  //   logos = darkModeLogos;
  // }

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          Testimonials
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          See what our customers love about our product. Discover how we excel in
          transparency, profitability, and satisfaction. Join us for quality, innovation,
          and reliable support.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} sx={{ display: 'flex' }}>
            <Card
              variant="outlined"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
              }}
            >
              <CardContent>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ color: 'text.secondary' }}
                >
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <CardHeader
                  // avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
                {/* <img
                  src={logos[index]}
                  alt={`Logo ${index + 1}`}
                  style={logoStyle}
                /> */}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
