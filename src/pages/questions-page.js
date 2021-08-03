import { lazy, Suspense } from 'react';
import Loading from '../utils/loading';

// import Questions from '../components/questions-formik';
const Questions = lazy(() => import('../components/questions-formik'));

const QuestionsPage = () => {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Questions />
      </Suspense>
    </main>
  );
};

export default QuestionsPage;
