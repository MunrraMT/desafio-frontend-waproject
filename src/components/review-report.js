import {
  Box,
  Card,
  CardActions,
  Button,
  Grid,
  makeStyles,
} from '@material-ui/core';
import './styles/review-report.css';

const useStyles = makeStyles({
  cardReviewReport: { backgroundColor: '#ededed !important' },
});

const ReviewReport = () => {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center">
      <Box width="90vw" className="box-review-report">
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
