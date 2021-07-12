import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './pages/home-page';

import StartQuestRoute from './routes/start-quest-route';
import QuestsRoute from './routes/questions-route';
import { DataProvider } from './providers/data-context';

const Routes = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <StartQuestRoute exact path="/start" />
          <QuestsRoute exact path="/quests" />
          <Route exact path="/report" component={() => <h2>Relatório</h2>} />
        </Switch>
      </BrowserRouter>
    </DataProvider>
  );
};
export default Routes;
