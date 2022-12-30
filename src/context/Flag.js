import React, { createContext, useState } from 'react';

const FlagContext = createContext({
  result: [],
  dispatch: () => {},
});

const FlagProvider = ({ children }) => {
    
    const [flag, setFlag] = useState(false);

    console.log("flag provider", flag);

    const value = { flag , dispatch: setFlag };
    
    return <FlagContext.Provider value={value}>{children}</FlagContext.Provider>;
};

const FlagConsumer = FlagContext.Consumer;

export { FlagProvider, FlagConsumer };
export default FlagContext;