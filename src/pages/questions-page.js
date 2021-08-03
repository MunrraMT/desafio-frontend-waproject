import { lazy, Suspense } from 'react';

// import Questions from '../components/questions-formik';
const Questions = lazy(() => import('../components/questions-formik'));

const QuestionsPage = () => {
  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        <Questions />
      </Suspense>
    </main>
  );
};

export default QuestionsPage;
