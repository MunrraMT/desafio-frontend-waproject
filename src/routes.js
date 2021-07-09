import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HowManyQuestions from './components/how-many-questions';
import StartQuest from './components/start-quest';
import { useContext } from 'react';
import { DataContext } from './providers/data-context';

const Routes = () => {
  const StartQuestAuth = ({ component: Component, ...rest }) => {
    const { userInfo } = useContext(DataContext);
    const valid = userInfo.numberQuestions > 0;

    return (
      <Route
        {...rest}
        render={(props) =>
          valid ? <Component {...props} /> : <Redirect to={{ pathname: '/' }} />
        }
      />
    );
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HowManyQuestions} />
        <StartQuestAuth exact path="/start" component={StartQuest} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
