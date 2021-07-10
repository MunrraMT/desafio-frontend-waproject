import { Box, Card, Typography } from '@material-ui/core';
import './styles/home-title.css';

const HomeTitle = () => {
  return (
    <header>
      <Box m="1rem" maxWidth="30rem" minWidth="20.5rem" minHeight="2rem">
        <Card variant="outlined" className="title-app">
          <Typography align="center" variant="h4" component="h1">
            Desafio Front End
          </Typography>
        </Card>
      </Box>
    </header>
  );
};

export default HomeTitle;
