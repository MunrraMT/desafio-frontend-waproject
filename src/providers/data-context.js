import { useState } from 'react';
import { createContext } from 'react';

export const DataContext = createContext({});

export const DataProvider = (props) => {
  const [userInfo, setUserInfo] = useState({
    authenticated: false,
    numberQuestions: 0,
  });

  return (
    <DataContext.Provider value={{ userInfo, setUserInfo }}>
      {props.children}
    </DataContext.Provider>
  );
};