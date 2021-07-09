import { Grid } from '@material-ui/core';
import './App.css';
import HomeTitle from './components/home-title';
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
      <HomeTitle />
      <Routes />
    </Grid>
  );
}

export default App;
