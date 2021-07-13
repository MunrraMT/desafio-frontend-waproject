import {
  Box,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  showPonctuations: {
    marginTop: '1rem !important',
    backgroundColor: '#ededed !important',
  },
  boxShowPonctuantions: {
    '@media(min-width: 900px)': {
      width: '60vw !important',
    },
  },
  correctPoints: {
    color: 'green',
  },
  wrongPoints: {
    color: 'red',
  },
});

const ShowPonctuations = () => {
  const classes = useStyles();

  const correctPoints = JSON.parse(localStorage.getItem('correct-punctuation'));
  const wrongPoints = JSON.parse(localStorage.getItem('wrong-punctuation'));

  return (
    <Box m="1rem" width="90vw" className={classes.boxShowPonctuantions}>
      <Card className={classes.showPonctuations} variant="outlined">
        <CardContent>
          <Grid
            container
            direction="row"
            alignContent="center"
            justifyContent="space-evenly"
          >
            <Typography
              className={classes.correctPoints}
              align="center"
              variant="h5"
              component="h3"
              data-testid="max-correct-questions"
            >
              Acertos: {correctPoints}
            </Typography>
            <Typography
              className={classes.wrongPoints}
              align="center"
              variant="h5"
              component="h3"
              data-testid="max-wrong-questions"
            >
              Erros: {wrongPoints}
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ShowPonctuations;
