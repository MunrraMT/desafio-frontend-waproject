import {
  Container,
  Grid,
  Card,
  CardContent,
  Box,
  Typography,
  CardActions,
  Fab,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import './how-many-questions.css';

// import axios from 'axios';
// import { useState } from 'react';

const HowManyQuestions = () => {
  // const [numberOfQuestions, setNumberOfQuestions] = useState(0);

  // const escolheValor = async () => {
  //   const url = `https://opentdb.com/api.php?amount=${numberOfQuestions}`;
  //   const response = await axios.get(url).then(({ data }) => data);

  //   console.log(url);
  //   console.log(response);
  // };

  return (
    <Container>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Box minHeight="4rem">
          <Typography align="center" variant="h4" component="h1">
            Desafio Front End
          </Typography>
        </Box>
        <Card className="card-quest-number" variant="outlined">
          <CardContent>
            <Typography align="center" variant="h5" component="h2">
              Quantas perguntas deseja responder?
            </Typography>
          </CardContent>
          <CardActions>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="space-around"
            >
              <Fab
                variant="extended"
                size="small"
                color="primary"
                aria-label="add"
              >
                <RemoveIcon />
              </Fab>
              <Typography variant="h2" component="h3">
                5
              </Typography>
              <Fab
                variant="extended"
                size="small"
                color="primary"
                aria-label="add"
              >
                <AddIcon />
              </Fab>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
    </Container>
  );
};

export default HowManyQuestions;
