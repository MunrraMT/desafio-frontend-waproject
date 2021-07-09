import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/home-page';

import StartQuestRoute from './routes/start-quest-route';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <StartQuestRoute />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
