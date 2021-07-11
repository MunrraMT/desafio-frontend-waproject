import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';
import './styles/start-quest.css';
import axios from 'axios';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { DataContext } from '../providers/data-context';

const StartQuest = () => {
  const context = useContext(DataContext);
  const history = useHistory();

  const getDataApi = async (inOut) => {
    if (inOut === false) return context.setQuestionsData([]);

    const url = `https://opentdb.com/api.php?amount=${context.numberQuestions}`;
    const data = await axios
      .get(url)
      .then(({ data }) => data.results)
      .catch((e) => console.log(e));

    localStorage.setItem('questions', JSON.stringify(data));
    context.setQuestionsData(data);
  };

  const saveInContext = async (inOut) => {
    context.setStarted(inOut);
  };

  const btnStartQuests = async () => {
    await getDataApi(true);
    await saveInContext(true);
    history.push('/quests');
  };

  const btnCancelQuests = () => {
    getDataApi(false);
    saveInContext(false);
    history.push('/');
  };

  return (
    <Box m="1rem" width="90vw" className="box-start-cancel">
      <Card className="card-quest-number" variant="outlined">
        <CardContent>
          <Typography align="center" variant="h5" component="h2">
            {context.numberQuestions} perguntas?
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
            ></Grid>
            <Button
              data-testid="btn-start-quest"
              className="btn-start-cancel"
              size="large"
              variant="contained"
              color="primary"
              onClick={btnStartQuests}
            >
              start
            </Button>
            <Button
              data-testid="btn-cancel-quest"
              className="btn-start-cancel"
              size="large"
              variant="contained"
              color="primary"
              onClick={btnCancelQuests}
            >
              cancel
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </Box>
  );
};

export default StartQuest;
