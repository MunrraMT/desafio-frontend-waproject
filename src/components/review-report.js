import { Box, Grid, Card, CardActions, Button } from '@material-ui/core';

const ReviewReport = () => {
  return (
    <Box m="1rem" maxWidth="30rem">
      <Card className="card-quest-number" variant="outlined">
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
              data-testid="btn-review-report"
              size="large"
              variant="contained"
              color="primary"
            >
              Rever último questionário
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ReviewReport;
