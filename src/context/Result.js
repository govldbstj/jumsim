import React, { createContext, useState } from 'react';

const ResultContext = createContext({
  result: [],
  dispatch: () => {},
});

const ResultProvider = ({ children }) => {
    
    console.log("hh");
    
    const [result, setResult] = useState([]);

    console.log("result provider", result);

    const value = { result , dispatch: setResult };
    
    return <ResultContext.Provider value={value}>{children}</ResultContext.Provider>;
};

const ResultConsumer = ResultContext.Consumer;

export { ResultProvider, ResultConsumer };
export default ResultContext;