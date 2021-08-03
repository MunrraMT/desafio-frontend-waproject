import { lazy, Suspense } from 'react';

// import ReportQuestions from '../components/report-questions';
const ReportQuestions = lazy(() => import('../components/report-questions'));

const ReportPage = () => {
  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        <ReportQuestions />
      </Suspense>
    </main>
  );
};

export default ReportPage;
