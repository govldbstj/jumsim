import React, { createContext, useState } from 'react';

const PositionContext = createContext({
  position: [],
  dispatch: () => {},
});

const PositionProvider = ({ children }) => {
  const [position, setPosition] = useState([]);
 // console.log("providers", station.id);
 // console.log("in?", station.name);

  const value = { position , dispatch: setPosition };
  return <PositionContext.Provider value={value}>{children}</PositionContext.Provider>;
};

const PositionConsumer = PositionContext.Consumer;

export { PositionProvider, PositionConsumer };
export default PositionContext;