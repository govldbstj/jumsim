import React, { createContext, useState } from 'react';

const RandomResultContext = createContext({
  randomResult: [],
  dispatch: () => {},
});

const RandomResultProvider = ({ children }) => {
    
    const [randomResult, setRandomResult] = useState([]);

    const value = { randomResult , dispatch: setRandomResult };
    
    return <RandomResultContext.Provider value={value}>{children}</RandomResultContext.Provider>;
};

const RandomResultConsumer = RandomResultContext.Consumer;

export { RandomResultProvider, RandomResultConsumer };
export default RandomResultContext;