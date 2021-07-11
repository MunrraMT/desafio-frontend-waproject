import { Box, Paper, Typography } from '@material-ui/core';
import './styles/home-title.css';

const HomeTitle = () => {
  return (
    <header>
      <Box width="90vw" className="box-title-app">
        <Paper variant="outlined" className="paper-title-app">
          <Typography align="center" variant="h4" component="h1">
            Desafio Front End
          </Typography>
        </Paper>
      </Box>
    </header>
  );
};

export default HomeTitle;
