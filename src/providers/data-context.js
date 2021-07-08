import { createContext } from 'react';

export const DataContext = createContext({});

export const DataProvider = (props) => {
  const data = [];

  return (
    <DataContext.Provider value={{ data }}>
      {props.children}
    </DataContext.Provider>
  );
};
