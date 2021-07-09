import { useContext } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HowManyQuestions from './components/how-many-questions';
import { DataContext } from './providers/data-context';

const Routes = () => {
  const { userInfo } = useContext(DataContext);

  const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          userInfo.authenticated ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: '/' }} />
          )
        }
      />
    );
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HowManyQuestions} />
        <Route exact path="/app" component={() => <h3>App</h3>} />
        <PrivateRoute exact path="/quest" component={() => <h3>Quest</h3>} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
