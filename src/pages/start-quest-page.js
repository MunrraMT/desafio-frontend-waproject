import { lazy, Suspense } from 'react';
import Loading from '../utils/loading';

// import StartQuest from '../components/start-quest';
const StartQuest = lazy(() => import('../components/start-quest'));

const StartQuestPage = () => {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <StartQuest />
      </Suspense>
    </main>
  );
};

export default StartQuestPage;
