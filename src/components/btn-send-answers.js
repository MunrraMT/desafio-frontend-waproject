import { Box, Button, Card, CardActions, Grid } from '@material-ui/core';
import './styles/btn-send-answers.css';

const BtnSendAnswers = () => {
  return (
    <Grid container justifyContent="center">
      <Box width="90vw" className="box-send-answers">
        <Card variant="outlined" className="card-send-answers">
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
