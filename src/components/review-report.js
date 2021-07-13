import {
  Box,
  Card,
  CardActions,
  Button,
  Grid,
  makeStyles,
} from '@material-ui/core';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  cardReviewReport: { backgroundColor: '#ededed !important' },
  boxReviewReport: {
    '@media(min-width: 900px)': {
      width: '60vw !important',
    },
  },
});

const ReviewReport = () => {
  const classes = useStyles();
  const history = useHistory();

  const goLastReport = () => {
    history.push('/report');
  };

  const showBtn = () => {
    const lastReport = JSON.parse(localStorage.getItem('last-answers'));

    if (lastReport === {} || lastReport === null) {
      return (
        <Grid container justifyContent="center">
          <Box width="90vw" className={classes.boxReviewReport}>
            <Card variant="outlined" className={classes.cardReviewReport}>
              <CardActions>
                <Button
                  fullWidth
                  data-testid="btn-review-report"
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={goLastReport}
                  disabled
                >
                  Rever último relatório
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
      );
    } else {
      return (
        <Grid container justifyContent="center">
          <Box width="90vw" className={classes.boxReviewReport}>
            <Card variant="outlined" className={classes.cardReviewReport}>
              <CardActions>
                <Button
                  fullWidth
                  data-testid="btn-review-report"
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={goLastReport}
                >
                  Rever último relatório
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
      );
    }
  };

  return showBtn();
};

export default ReviewReport;
