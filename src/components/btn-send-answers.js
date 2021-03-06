import {
  Box,
  Button,
  Card,
  CardActions,
  Grid,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  boxSendAnswers: {
    marginTop: '0.5rem',
    marginBottom: '1rem',
    '@media(min-width: 900px)': {
      width: '60vw !important',
    },
    cardSendAnswers: {
      backgroundColor: '#ededed !important',
    },
  },
});

const BtnSendAnswers = () => {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center">
      <Box width="90vw" className={classes.boxSendAnswers}>
        <Card variant="outlined" className={classes.cardSendAnswers}>
          <CardActions>
            <Button
              fullWidth
              type="submit"
              data-testid="btn-send-answers"
              size="large"
              variant="contained"
              color="primary"
            >
              Enviar respostas
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Grid>
  );
};

export default BtnSendAnswers;
