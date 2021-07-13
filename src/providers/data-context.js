import { useState } from 'react';
import { createContext } from 'react';

export const DataContext = createContext({
  numberQuestions: 0,
  started: false,
  questionsData: [],
  correctPunctuation: 0,
  wrongPunctuation: 0,
});

export const DataProvider = (props) => {
  const [numberQuestions, setNumberQuestions] = useState(0);
  const [started, setStarted] = useState(false);
  const [questionsData, setQuestionsData] = useState([]);
  const [correctPunctuation, setCorrectPunctuation] = useState(0);
  const [wrongPunctuation, setWrongPunctuation] = useState(0);

  return (
    <DataContext.Provider
      value={{
        numberQuestions,
        setNumberQuestions,
        started,
        setStarted,
        questionsData,
        setQuestionsData,
        correctPunctuation,
        setCorrectPunctuation,
        wrongPunctuation,
        setWrongPunctuation,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
