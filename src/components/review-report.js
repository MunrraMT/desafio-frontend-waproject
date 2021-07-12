import {
  Box,
  Card,
  CardActions,
  Button,
  Grid,
  makeStyles,
} from '@material-ui/core';

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
            >
              Rever último questionário
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Grid>
  );
};

export default ReviewReport;
