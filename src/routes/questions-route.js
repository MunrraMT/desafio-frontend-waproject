import { lazy, Suspense } from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { DataContext } from '../providers/data-context';

// import QuestionsPage from '../pages/questions-page';
const QuestionsPage = lazy(() => import('../pages/questions-page'));

const QuestsRoute = ({ ...rest }) => {
  const context = useContext(DataContext);
  const valid = context.started;

  return (
    <Route {...rest}>
      {valid ? (
        <Suspense fallback={<p>Loading...</p>}>
          <QuestionsPage />
        </Suspense>
      ) : (
        <Redirect to='/' />
      )}
    </Route>
  );
};

export default QuestsRoute;
