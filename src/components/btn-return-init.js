import {
  Box,
  Button,
  Card,
  CardActions,
  Grid,
  makeStyles,
} from '@material-ui/core';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  boxReturnInit: {
    marginTop: '0.5rem',
    marginBottom: '1rem',
    '@media(min-width: 900px)': {
      width: '60vw !important',
    },
    cardReturnInit: {
      backgroundColor: '#ededed !important',
    },
  },
});

const BtnReturnInit = () => {
  const classes = useStyles();
  const history = useHistory();

  const returnInit = () => {
    history.push('/');
  };

  return (
    <Grid container justifyContent="center">
      <Box width="90vw" className={classes.boxReturnInit}>
        <Card variant="outlined" className={classes.cardReturnInit}>
          <CardActions>
            <Button
              fullWidth
              type="submit"
              data-testid="btn-send-answers"
              size="large"
              variant="contained"
              color="primary"
              onClick={returnInit}
            >
              Retornar ao começo
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Grid>
  );
};

export default BtnReturnInit;
