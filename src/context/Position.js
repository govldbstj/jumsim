import React, { createContext, useState } from 'react';

const PositionContext = createContext({
  station: [],
  dispatch: () => {},
});

const PositionProvider = ({ children }) => {
  const [position, setPosition] = useState([]);
 // console.log("providers", station.id);
 // console.log("in?", station.name);

  const value = { station , dispatch: setStation };
  return <PositionContext.Provider value={value}>{children}</PositionContext.Provider>;
};

const PositionConsumer = PositionContext.Consumer;

export { PositionProvider, PositionConsumer };
export default PositionContext;