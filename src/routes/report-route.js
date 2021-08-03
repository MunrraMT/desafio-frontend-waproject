import { lazy, Suspense } from 'react';
import { Redirect, Route } from 'react-router';

// import ReportPage from '../pages/report-page';
const ReportPage = lazy(() => import('../pages/report-page'));

const ReportRoute = ({ ...rest }) => {
  const answers = JSON.parse(localStorage.getItem('last-answers'));
  const questions = JSON.parse(localStorage.getItem('last-questions'));
  const valid = answers !== null && questions !== null;

  return (
    <Route {...rest}>
      {valid ? (
        <Suspense fallback={<p>Loading...</p>}>
          <ReportPage />
        </Suspense>
      ) : (
        <Redirect to='/' />
      )}
    </Route>
  );
};

export default ReportRoute;
