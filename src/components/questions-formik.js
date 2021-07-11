import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core';
import { useContext } from 'react';
import { DataContext } from '../providers/data-context';
import { useFormik } from 'formik';
import { useHistory } from 'react-router';
import BtnSendAnswers from './btn-send-answers';
import numberRandom from '../utils/number-random';
import idFormater from '../utils/number-formater';
import './styles/questions-formik.css';

const Questions = () => {
  const context = useContext(DataContext);
  const history = useHistory();

  const questionList = () => {
    const quetionsList = {};

    for (let index = 0; index < context.numberQuestions; index++) {
      quetionsList[idFormater(index)] = '';
    }

    return quetionsList;
  };

  const formik = useFormik({
    initialValues: {
      ...questionList(),
    },
    onSubmit: (values) => {
      context.setAnswersData(values);
      history.push('/report');
    },
  });

  const listAnswersFormated = (question, id) => {
    const correctAnswer = question['correct_answer'];
    const incorrectAnswers = question['incorrect_answers'];
    const answers = [correctAnswer, ...incorrectAnswers];
    const answersSorted = answers.sort();

    const answersFormated = answersSorted.map((answer) => {
      return (
        <FormControlLabel
          key={numberRandom()}
          control={<Radio color="primary" />}
          label={answer}
          value={answer}
        />
      );
    });

    return (
      <Grid
        container
        direction="column"
        alignItems="flex-start"
        justifyContent="center"
        className="answers-grid"
      >
        <RadioGroup
          aria-label={idFormater(id)}
          name={idFormater(id)}
          value={formik.values[idFormater(id)]}
          onChange={formik.handleChange}
        >
          {answersFormated}
        </RadioGroup>
      </Grid>
    );
  };

  const questionsList = context.questionsData.map((question, id) => {
    return (
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        key={numberRandom()}
      >
        <FormControl component="fieldset" className="question-formated">
          <Box m="1rem" width="90vw" className="box-list-questions">
            <Card className="card-quest-number" variant="outlined">
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className="avatar-question">
                    {idFormater(id)}
                  </Avatar>
                }
                title={
                  'Difficulty: ' + `${question.difficulty}`.toLocaleUpperCase()
                }
                subheader={`${question.category}`}
              />

              <CardContent>
                <Typography color="textPrimary" align="justify" gutterBottom>
                  {`${question.question}`}
                </Typography>
              </CardContent>

              <CardActions>{listAnswersFormated(question, id)}</CardActions>
            </Card>
          </Box>
        </FormControl>
      </Grid>
    );
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {questionsList}
      <BtnSendAnswers />
    </form>
  );
};

export default Questions;
