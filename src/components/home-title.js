import { Box, Paper, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  paperTitleApp: {
    backgroundColor: '#ededed !important',
  },
  boxTitleApp: {
    marginTop: '0.5rem !important',
    '@media(min-width: 900px)': {
      width: '60vw !important',
    },
  },
});

const HomeTitle = () => {
  const classes = useStyles();

  return (
    <header>
      <Box width="90vw" className={`${classes.boxTitleApp} box-title-app`}>
        <Paper variant="outlined" className={classes.paperTitleApp}>
          <Typography align="center" variant="h4" component="h1">
            Desafio Front End
          </Typography>
        </Paper>
      </Box>
    </header>
  );
};

export default HomeTitle;
