import Grid from '@mui/material/Grid';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Experience from '../components/Experience/Experience';
import Education from '../components/Education/Education';
import Certificates from '../components/Certificates/Certificates';

const HomePage = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <About />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Skills />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Experience />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Education />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Certificates />
      </Grid>
    </Grid>
  );
};

export default HomePage;
