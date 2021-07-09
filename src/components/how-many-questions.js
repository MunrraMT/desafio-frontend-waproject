import {
  Container,
  Grid,
  Card,
  CardContent,
  Box,
  Typography,
  CardActions,
  Fab,
  Button,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import './styles/how-many-questions.css';

import axios from 'axios';
import { useState } from 'react';
import { useContext } from 'react';
import { DataContext } from '../providers/data-context';

const HowManyQuestions = () => {
  const [numberOfQuestions, setNumberOfQuestions] = useState(5);

  const { setUserInfo } = useContext(DataContext);

  const getDataApi = async () => {
    const url = `https://opentdb.com/api.php?amount=${numberOfQuestions}`;
    const response = (await axios.get(url)).data;
    const results = response.results;

    return results;
  };

  const saveInContext = async () => {
    setUserInfo({
      numberQuestions: numberOfQuestions,
      questions: await getDataApi(),
    });
  };

  const startQuestions = async () => {
    saveInContext();
  };

  const addNumberOfQuestion = () => {
    setNumberOfQuestions(Number(numberOfQuestions) + 1);
  };

  const removeNumberOfQuestion = () => {
    if (numberOfQuestions === 0) return;
    setNumberOfQuestions(Number(numberOfQuestions) - 1);
  };

  return (
    <section>
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
                direction="column"
                alignContent="center"
                justifyContent="space-between"
              >
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
                    data-testid="remove-number-question"
                    onClick={removeNumberOfQuestion}
                  >
                    <RemoveIcon />
                  </Fab>
                  <Typography
                    variant="h2"
                    component="h3"
                    data-testid="number-question"
                  >
                    {numberOfQuestions}
                  </Typography>
                  <Fab
                    variant="extended"
                    size="small"
                    color="primary"
                    aria-label="add"
                    data-testid="add-number-question"
                    onClick={addNumberOfQuestion}
                  >
                    <AddIcon />
                  </Fab>
                </Grid>
                <Button
                  data-testid="btn-start-question"
                  className="btn-start-question"
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={startQuestions}
                >
                  Iniciar questionário
                </Button>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      </Container>
    </section>
  );
};

export default HowManyQuestions;
