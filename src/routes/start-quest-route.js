import { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { DataContext } from '../providers/data-context';
import StartQuestPage from '../pages/start-quest-page';

const StartQuestRoute = () => {
  const { userInfo } = useContext(DataContext);
  const valid = userInfo.numberQuestions > 0;

  return (
    <Route exact path="/start">
      {valid ? StartQuestPage : <Redirect to="/" />}
    </Route>
  );
};

export default StartQuestRoute;
