import { Box, Button, Grid } from '@material-ui/core';

const BtnSendAnswers = () => {
  return (
    <Box className="btn-send-answers" maxWidth="30rem">
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
          type="submit"
          data-testid="btn-send-answers"
          size="large"
          variant="contained"
          color="primary"
        >
          Enviar respostas
        </Button>
      </Grid>
    </Box>
  );
};

export default BtnSendAnswers;
