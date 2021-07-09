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
  const { userInfo, setUserInfo } = useContext(DataContext);
  const history = useHistory();

  const getDataApi = async (inOut) => {
    const url = `https://opentdb.com/api.php?amount=${userInfo.numberQuestions}`;
    const data = await axios
      .get(url)
      .then((res) => res.data)
      .then((data) => data.results)
      .catch((e) => console.log(e));

    if (inOut === true) {
      localStorage.setItem('quests', JSON.stringify(data));
    } else {
      localStorage.removeItem('quests');
    }
  };

  const saveInContext = (inOut) => {
    setUserInfo({
      authenticated: inOut,
    });
  };

  const startQuests = () => {
    getDataApi(true);
    saveInContext(true);
    history.push('/quest');
  };

  const cancelQuests = () => {
    getDataApi(false);
    saveInContext(false);
    history.push('/');
  };

  return (
    <Box m="1rem" maxWidth="30rem" minWidth="20rem">
      <Card className="card-quest-number" variant="outlined">
        <CardContent>
          <Typography align="center" variant="h5" component="h2">
            {userInfo.numberQuestions} perguntas?
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
              onClick={startQuests}
            >
              start
            </Button>
            <Button
              data-testid="btn-cancel-quest"
              className="btn-start-cancel"
              size="large"
              variant="contained"
              color="primary"
              onClick={cancelQuests}
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
