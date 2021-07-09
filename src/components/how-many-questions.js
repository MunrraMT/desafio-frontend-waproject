import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Fab,
  Button,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import './styles/how-many-questions.css';

import axios from 'axios';
import { useState, useContext } from 'react';
import { DataContext } from '../providers/data-context';
import { useHistory } from 'react-router-dom';

const HowManyQuestions = () => {
  const [numberOfQuestions, setNumberOfQuestions] = useState(5);
  const { setUserInfo } = useContext(DataContext);
  const history = useHistory();

  const getDataApi = async () => {
    const url = `https://opentdb.com/api.php?amount=${numberOfQuestions}`;
    const data = await axios
      .get(url)
      .then((res) => res.data)
      .then((data) => data.results)
      .catch((e) => console.log(e));

    localStorage.setItem('quests', JSON.stringify(data));
  };

  const saveInContext = () => {
    setUserInfo({
      authenticated: true,
      numberQuestions: numberOfQuestions,
    });
  };

  const startQuestions = () => {
    getDataApi();
    saveInContext();
    history.push('/quest');
  };

  const addNumberOfQuestion = () => {
    setNumberOfQuestions(Number(numberOfQuestions) + 1);
  };

  const removeNumberOfQuestion = () => {
    if (numberOfQuestions === 0) return;
    setNumberOfQuestions(Number(numberOfQuestions) - 1);
  };

  return (
    <Box m="1rem" maxWidth="30rem">
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
    </Box>
  );
};

export default HowManyQuestions;
