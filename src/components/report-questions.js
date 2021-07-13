import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  RadioGroup,
  Typography,
  makeStyles,
  FormLabel,
} from '@material-ui/core';
import { useContext } from 'react';
import { DataContext } from '../providers/data-context';
import { useEffect } from 'react';
import numberRandom from '../utils/number-random';
import idFormater from '../utils/number-formater';
import CheckIcon from '@material-ui/icons/Check';
import NotInterestedIcon from '@material-ui/icons/NotInterested';

const useStyles = makeStyles({
  answerGrid: {
    marginLeft: '1rem',
    width: '100% !important',
  },
  cardQuestNumber: {
    backgroundColor: '#ededed !important',
  },
  avatarQuestion: {
    backgroundColor: '#303f9f !important',
  },
  boxListQuestions: {
    '@media(min-width: 900px)': {
      width: '60vw !important',
    },
  },
  wrongAnswer: {
    color: 'red !important',
    display: 'flex',
  },
  correctAnswer: {
    color: 'green !important',
    display: 'flex',
  },
  icon: {
    marginRight: '0.25rem',
  },
});

const ReportQuestions = () => {
  const classes = useStyles();
  const context = useContext(DataContext);

  const questionsLoad = JSON.parse(localStorage.getItem('last-questions'));
  const answersLoad = JSON.parse(localStorage.getItem('last-answers'));

  useEffect(() => {
    let acertos = 0;
    let erros = 0;

    questionsLoad.forEach((question, id) => {
      const correctAnswer = question['correct_answer'];

      if (correctAnswer === answersLoad[idFormater(id)]) {
        acertos += 1;
      } else {
        erros += 1;
      }
    });

    context.setCorrectPunctuation(acertos);
    context.setWrongPunctuation(erros);
  });

  const listAnswersFormated = (question, id) => {
    const correctAnswer = question['correct_answer'];
    const incorrectAnswers = question['incorrect_answers'];
    const answers = [correctAnswer, ...incorrectAnswers];
    const answersSorted = answers.sort();

    const answersFormated = answersSorted.map((answer) => {
      if (answer === answersLoad[idFormater(id)] && answer === correctAnswer) {
        return (
          <Typography
            className={classes.correctAnswer}
            color="textSecondary"
            align="justify"
            key={numberRandom()}
            gutterBottom
          >
            <CheckIcon className={classes.icon} />
            {answer}
          </Typography>
        );
      }

      if (answer === answersLoad[idFormater(id)]) {
        return (
          <Typography
            className={classes.wrongAnswer}
            color="textSecondary"
            align="justify"
            key={numberRandom()}
            gutterBottom
          >
            <NotInterestedIcon className={classes.icon} />
            {answer}
          </Typography>
        );
      }

      if (answer === correctAnswer) {
        return (
          <Typography
            className={classes.correctAnswer}
            color="textSecondary"
            align="justify"
            key={numberRandom()}
            gutterBottom
          >
            {answer}
          </Typography>
        );
      }

      return (
        <Typography
          color="textSecondary"
          align="justify"
          gutterBottom
          key={numberRandom()}
        >
          {answer}
        </Typography>
      );
    });

    return answersFormated;
  };

  const questions = questionsLoad.map((question, id) => {
    return (
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        key={numberRandom()}
      >
        <Box m="1rem" width="90vw" className={classes.boxListQuestions}>
          <Card className={classes.cardQuestNumber} variant="outlined">
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatarQuestion}>
                  {idFormater(id)}
                </Avatar>
              }
              title={
                'Difficulty: ' + `${question.difficulty}`.toLocaleUpperCase()
              }
              subheader={`${question.category}`}
            />

            <FormLabel component="legend">
              <CardContent>
                <Typography color="textPrimary" align="justify" gutterBottom>
                  {`${question.question}`}
                </Typography>
              </CardContent>
            </FormLabel>

            <CardActions>
              <Grid
                container
                direction="column"
                alignItems="flex-start"
                justifyContent="center"
                className={classes.answerGrid}
              >
                <RadioGroup className={classes.answerRadioGroup}>
                  {listAnswersFormated(question, id)}
                </RadioGroup>
              </Grid>
            </CardActions>
          </Card>
        </Box>
      </Grid>
    );
  });

  return questions;
};

export default ReportQuestions;
