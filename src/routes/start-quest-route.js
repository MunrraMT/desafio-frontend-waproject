import { lazy, Suspense, useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { DataContext } from '../providers/data-context';
import Loading from '../utils/loading';

// import StartQuestPage from '../pages/start-quest-page';
const StartQuestPage = lazy(() => import('../pages/start-quest-page'));

const StartQuestRoute = ({ ...rest }) => {
  const context = useContext(DataContext);
  const valid = context.numberQuestions > 0;

  return (
    <Route {...rest}>
      {valid ? (
        <Suspense fallback={<Loading />}>
          <StartQuestPage />
        </Suspense>
      ) : (
        <Redirect to='/' />
      )}
    </Route>
  );
};

export default StartQuestRoute;
