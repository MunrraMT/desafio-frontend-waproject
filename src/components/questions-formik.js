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
  makeStyles,
  FormLabel
} from '@material-ui/core';
import { useContext } from 'react';
import { DataContext } from '../providers/data-context';
import { Formik } from 'formik';
import { useHistory } from 'react-router';
import BtnSendAnswers from './btn-send-answers';
import numberRandom from '../utils/number-random';
import idFormater from '../utils/number-formater';

const useStyles = makeStyles({
  answerGrid: {
    marginLeft: '1rem',
    width: '100% !important'
  },
  answerRadioGroup: {
    width: '100% !important'
  },
  cardQuestNumber: {
    backgroundColor: '#ededed !important'
  },
  btnSendAnswers: {
    margin: '1rem !important',
    marginTop: '0.5rem !important',
    marginBottom: '2rem !important'
  },
  avatarQuestion: {
    backgroundColor: '#303f9f !important'
  },
  errorMsg: {
    color: '#FF0000 !important',
    textAlign: 'right !important',
    width: '100% !important'
  },
  boxListQuestions: {
    '@media(min-width: 900px)': {
      width: '60vw !important'
    }
  }
});

const Questions = () => {
  const classes = useStyles();
  const context = useContext(DataContext);
  const history = useHistory();

  const questionList = () => {
    const quetionsList = {};

    for (let index = 0; index < context.numberQuestions; index++) {
      quetionsList[idFormater(index)] = '';
    }

    return quetionsList;
  };

  const formSubmit = (values) => {
    localStorage.setItem(
      'last-questions',
      JSON.stringify(context.questionsData)
    );
    localStorage.setItem('last-answers', JSON.stringify(values));
    history.push('/report');
  };

  const validateQuestion = (values) => {
    let erros = {};

    for (const key in values) {
      if (values[key] === '') {
        erros[key] = 'faltando';
      }
    }

    return erros;
  };

  const listAnswersFormated = (question, questionID) => {
    const correctAnswer = question['correct_answer'];
    const incorrectAnswers = question['incorrect_answers'];
    const answers = [correctAnswer, ...incorrectAnswers];
    const answersSorted = answers.sort();

    const answersFormated = answersSorted.map((answer, id) => {
      return (
        <FormControlLabel
          control={<Radio color='primary' />}
          key={numberRandom()}
          label={answer}
          value={answer}
          data-testid={`card-answer-question-${idFormater(
            questionID
          )}-${idFormater(id)}`}
        />
      );
    });

    return answersFormated;
  };

  return (
    <Formik
      initialValues={{ ...questionList() }}
      onSubmit={formSubmit}
      validate={validateQuestion}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          {context.questionsData.map((question, id) => (
            <Grid
              container
              direction='row'
              alignItems='center'
              justifyContent='center'
              key={numberRandom()}
            >
              <FormControl
                component='fieldset'
                className={classes.questionFormated}
              >
                <Box m='1rem' width='90vw' className={classes.boxListQuestions}>
                  <Card className={classes.cardQuestNumber} variant='outlined'>
                    <CardHeader
                      data-testid={`card-header-question-${idFormater(id)}`}
                      avatar={
                        <Avatar
                          aria-label='recipe'
                          className={classes.avatarQuestion}
                          data-testid={`card-avatar-question-${idFormater(id)}`}
                        >
                          {idFormater(id)}
                        </Avatar>
                      }
                      title={
                        'Difficulty: ' +
                        `${question.difficulty}`.toLocaleUpperCase()
                      }
                      subheader={`${question.category}`}
                    />

                    <FormLabel component='legend'>
                      <CardContent>
                        <Typography
                          color='textPrimary'
                          align='justify'
                          gutterBottom
                          data-testid={`card-txt-question-${idFormater(id)}`}
                        >
                          {`${question.question}`}
                        </Typography>
                      </CardContent>
                    </FormLabel>

                    <CardActions>
                      <Grid
                        container
                        direction='column'
                        alignItems='flex-start'
                        justifyContent='center'
                        className={classes.answerGrid}
                      >
                        <RadioGroup
                          className={classes.answerRadioGroup}
                          aria-label={idFormater(id)}
                          onChange={(event) => {
                            props.setFieldValue(
                              idFormater(id),
                              event.currentTarget.value
                            );
                          }}
                          onBlur={props.handleBlur}
                          value={props.values[idFormater(id)]}
                          name={`answers-${idFormater(id)}`}
                        >
                          {listAnswersFormated(question, id)}
                          {props.errors[idFormater(id)] &&
                          props.touched[idFormater(id)] ? (
                            <Typography
                              color='textPrimary'
                              className={classes.errorMsg}
                              gutterBottom
                              data-testid={`card-error-question-${idFormater(
                                id
                              )}`}
                            >
                              Precisa ser respondido
                            </Typography>
                          ) : null}
                        </RadioGroup>
                      </Grid>
                    </CardActions>
                  </Card>
                </Box>
              </FormControl>
            </Grid>
          ))}
          <BtnSendAnswers />
        </form>
      )}
    </Formik>
  );
};

export default Questions;
