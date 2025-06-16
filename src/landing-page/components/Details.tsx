import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import MuiChip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';

const items = [
  // {
  //   icon: <DevicesRoundedIcon />,
  //   title: 'What is SimAnalytics?',
  //   description:
  //     'This item could let users know the product is available on all platforms, such as web, mobile, and desktop.',
  //   imageLight: `url("https://mui.com/static/images/templates/templates-images/devices-light.png")`,
  //   imageDark: `url("https://mui.com/static/images/templates/templates-images/devices-dark.png")`,
  // },
  {
    icon: <ViewQuiltRoundedIcon />,
    title: 'Why SimAnalytics?',
    description:
      "Proven Profitability: With over $35 million in total profits and a 20+ year track record, Sim Analytics isn’t just talk — we deliver results. Our clients consistently win thousands of dollars monthly using systems that stand the test of time. \
 #1 Ranked Sports Handicapping Service: We’re not just another pick service. We’re the #1 trusted source for serious sports bettors who want reliable, data-backed selections that outperform the market. \
 AI-Powered Advantage: Our cutting-edge AI and analytics systems are built to find profitable, long-term betting opportunities. These models adapt in real time to market shifts, giving you a sustained edge others can’t match",
    // imageLight: `url("https://mui.com/static/images/templates/templates-images/dash-light.png")`,
    // imageDark: `url("https://mui.com/static/images/templates/templates-images/dash-dark.png")`,
  },
  {
    icon: <EdgesensorHighRoundedIcon />,
    title: 'What you get',
    description:
      "Daily Picks via text, email and on your account registration page. {newline} \
Bankroll Management advice. {newline} \
Personal tips and customer support from our team.",
    // imageLight: `url("https://mui.com/static/images/templates/templates-images/mobile-light.png")`,
    // imageDark: `url("https://mui.com/static/images/templates/templates-images/mobile-dark.png")`,
  },
];

interface ChipProps {
  selected?: boolean;
}

const Chip = styled(MuiChip)<ChipProps>(({ theme }) => ({
  variants: [
    {
      props: ({ selected }) => !!selected,
      style: {
        background:
          'linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))',
        color: 'hsl(0, 0%, 100%)',
        borderColor: (theme.vars || theme).palette.primary.light,
        '& .MuiChip-label': {
          color: 'hsl(0, 0%, 100%)',
        },
        ...theme.applyStyles('dark', {
          borderColor: (theme.vars || theme).palette.primary.dark,
        }),
      },
    },
  ],
}));

interface MobileLayoutProps {
  selectedItemIndex: number;
  handleItemClick: (index: number) => void;
  selectedFeature: (typeof items)[0];
}

export function MobileLayout({
  selectedItemIndex,
  handleItemClick,
  // selectedFeature,
}: MobileLayoutProps) {
  if (!items[selectedItemIndex]) {
    return null;
  }

  return (
    <Box
      sx={{
        display: { xs: 'flex', sm: 'none' },
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Box sx={{ display: 'flex', gap: 2, overflow: 'auto' }}>
        {items.map(({ title }, index) => (
          <Chip
            size="medium"
            key={index}
            label={title}
            onClick={() => handleItemClick(index)}
            selected={selectedItemIndex === index}
          />
        ))}
      </Box>
      <Card variant="outlined">
        <Typography
          gutterBottom
          sx={{ color: 'text.primary', fontWeight: 'medium' }}
        >
          {items[selectedItemIndex].description.split('{newline}').map((value: string, _: number) => (
            <>
              {value}
              <br />
            </>
          ))}

        </Typography>
        {/* <Box
          sx={(theme) => ({
            mb: 2,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: 280,
            backgroundImage: 'var(--items-imageLight)',
            ...theme.applyStyles('dark', {
              backgroundImage: 'var(--items-imageDark)',
            }),
          })}
          style={
            items[selectedItemIndex]
              ? ({
                  '--items-imageLight': items[selectedItemIndex].imageLight,
                  '--items-imageDark': items[selectedItemIndex].imageDark,
                } as any)
              : {}
          }
        /> */}
        {/* <Box sx={{ px: 2, pb: 2 }}>
          <Typography
            gutterBottom
            sx={{ color: 'text.primary', fontWeight: 'medium' }}
          >
            {selectedFeature.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5 }}>
            {selectedFeature.description}
          </Typography>
        </Box> */}
      </Card>
    </Box>
  );
}

export default function Details() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="details" sx={{ py: { xs: 8, sm: 16 } }}>
      <Box sx={{ width: { sm: '100%', md: '60%' } }}>
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          Details
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', mb: { xs: 2, sm: 4 } }}
        >
          {/* Some text could go here... */}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row-reverse' },
          gap: 2,
        }}
      >
        <div>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 2,
              height: '100%',
            }}
          >
            {items.map(({ icon, title }, index) => (
              <Box
                key={index}
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={[
                  (theme) => ({
                    p: 2,
                    height: '100%',
                    width: '100%',
                    '&:hover': {
                      backgroundColor: (theme.vars || theme).palette.action.hover,
                    },
                  }),
                  selectedItemIndex === index && {
                    backgroundColor: 'action.selected',
                  },
                ]}
              >
                <Box
                  sx={[
                    {
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'left',
                      gap: 1,
                      textAlign: 'left',
                      textTransform: 'none',
                      color: 'text.secondary',
                    },
                    selectedItemIndex === index && {
                      color: 'text.primary',
                    },
                  ]}
                >
                  {icon}

                  <Typography variant="h6">{title}</Typography>
                  {/* <Typography variant="body2">{description}</Typography> */}
                </Box>
              </Box>
            ))}
          </Box>
          <MobileLayout
            selectedItemIndex={selectedItemIndex}
            handleItemClick={handleItemClick}
            selectedFeature={selectedFeature}
          />
        </div>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            width: { xs: '100%', md: '70%' },
            height: 'var(--items-image-height)',
          }}
        >
          <Card
            variant="outlined"
            sx={{
              height: '100%',
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
              pointerEvents: 'none',
            }}
          >
            <Typography
              gutterBottom
              sx={{ color: 'text.primary', fontWeight: 'medium' }}
            >
              {/* {items[selectedItemIndex].description} */}
              {items[selectedItemIndex].description.split('{newline}').map((value: string, _: number) => (
                <>
                  {value}
                  <br />
                </>
              ))}
            </Typography>
            {/* <Box
              sx={(theme) => ({
                m: 'auto',
                width: 420,
                height: 500,
                backgroundSize: 'contain',
                backgroundImage: 'var(--items-imageLight)',
                ...theme.applyStyles('dark', {
                  backgroundImage: 'var(--items-imageDark)',
                }),
              })}
              style={
                items[selectedItemIndex]
                  ? ({
                      '--items-imageLight': items[selectedItemIndex].imageLight,
                      '--items-imageDark': items[selectedItemIndex].imageDark,
                    } as any)
                  : {}
              }
            /> */}
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
