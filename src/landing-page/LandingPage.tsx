
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../shared-theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
// import LogoCollection from './components/LogoCollection';
// import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Details from './components/Details';
import About from './components/About';

export default function LandingPage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <AppAppBar />
      <Hero />
      <div>
        <About />
        <Divider />
        <Details />
        <Divider />
        <Pricing />
        <Divider />
        <Testimonials />
        <Divider />
        {/* <Highlights />
        <Divider /> */}
        
        <FAQ />
        <Divider />
        <Footer />
      </div>
    </AppTheme>
  );
}
