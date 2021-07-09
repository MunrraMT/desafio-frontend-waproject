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

import { useState, useContext } from 'react';
import { DataContext } from '../providers/data-context';
import { useHistory } from 'react-router-dom';

const HowManyQuestions = () => {
  const [numberOfQuestionsChosen, setNumberOfQuestionsChosen] = useState(5);

  const context = useContext(DataContext);
  const history = useHistory();

  const saveInContext = () => {
    context.setNumberQuestions(numberOfQuestionsChosen);
  };

  const selectedNumber = () => {
    saveInContext();
    history.push('/start');
  };

  const addNumberOfQuestion = () => {
    if (numberOfQuestionsChosen >= 10) {
      return setNumberOfQuestionsChosen(10);
    }
    setNumberOfQuestionsChosen(Number(numberOfQuestionsChosen) + 1);
  };

  const removeNumberOfQuestion = () => {
    if (numberOfQuestionsChosen <= 1) {
      return setNumberOfQuestionsChosen(1);
    }
    setNumberOfQuestionsChosen(Number(numberOfQuestionsChosen) - 1);
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
                {numberOfQuestionsChosen}
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
              onClick={selectedNumber}
            >
              escolher quantidade
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </Box>
  );
};

export default HowManyQuestions;
