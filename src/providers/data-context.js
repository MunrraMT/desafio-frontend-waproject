import { useState } from 'react';
import { createContext } from 'react';

export const DataContext = createContext({
  numberQuestions: 0,
  started: false,
  questionsData: [],
  answersData: {},
  reportData: {},
});

export const DataProvider = (props) => {
  const [numberQuestions, setNumberQuestions] = useState(0);
  const [started, setStarted] = useState(false);
  const [questionsData, setQuestionsData] = useState([]);
  const [answersData, setAnswersData] = useState({});
  const [reportData, setReportData] = useState({});

  return (
    <DataContext.Provider
      value={{
        numberQuestions,
        setNumberQuestions,
        started,
        setStarted,
        questionsData,
        setQuestionsData,
        answersData,
        setAnswersData,
        reportData,
        setReportData,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
