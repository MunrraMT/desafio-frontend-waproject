import { Grid } from '@material-ui/core';
import './App.css';
import HomeTitle from './components/home-title';
import ReviewReport from './components/review-report';
import Routes from './routes';

function App() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="space-evenly"
      style={{ minHeight: '100vh' }}
    >
      <header>
        <HomeTitle />
      </header>
      <main>
        <Routes />
        <ReviewReport />
      </main>
    </Grid>
  );
}

export default App;
