import { Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import { DataProvider } from './providers/data-context';

import HomePage from './pages/home-page';

import StartQuestRoute from './routes/start-quest-route';
import QuestsRoute from './routes/questions-route';
import ReportRoute from './routes/report-route';

const Routes = () => {
  return (
    <DataProvider>
      <HashRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <StartQuestRoute exact path='/start' />
          <QuestsRoute exact path='/quests' />
          <ReportRoute exact path='/report' />

          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </HashRouter>
    </DataProvider>
  );
};
export default Routes;
