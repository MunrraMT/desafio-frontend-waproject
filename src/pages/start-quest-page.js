import { lazy, Suspense } from 'react';

// import StartQuest from '../components/start-quest';
const StartQuest = lazy(() => import('../components/start-quest'));

const StartQuestPage = () => {
  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        <StartQuest />
      </Suspense>
    </main>
  );
};

export default StartQuestPage;
