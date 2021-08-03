import { lazy, Suspense } from 'react';
import Loading from '../utils/loading';

// import ReportQuestions from '../components/report-questions';
const ReportQuestions = lazy(() => import('../components/report-questions'));

const ReportPage = () => {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <ReportQuestions />
      </Suspense>
    </main>
  );
};

export default ReportPage;
