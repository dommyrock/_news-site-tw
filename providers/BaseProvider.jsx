import React, { createContext, useContext, useState } from "react";

const BaseProviderContext = createContext([]);

export const BaseProvider = ({ children }) => {
  const [showModal, set_showModal] = useState(false);
  const providerValue = [showModal, set_showModal];
  return <BaseProviderContext.Provider value={providerValue}>{children}</BaseProviderContext.Provider>;
};

export const useBaseContext = () => {
  const context = useContext(BaseProviderContext);
  if (context === undefined) {
    throw new Error("useBaseContext can only be used inside BaseProvider");
  }
  return context;
};

//usage
//import {useBaseContext} from "./../BaseProvider.jsx"
//  const [showModal, set_showModal] = useBaseContext(false);

//Context docs:
//https://kentcdodds.com/blog/how-to-use-react-context-effectively
//contex apis:https://www.telerik.com/blogs/understand-react-context-apis
//src :https://stackoverflow.com/questions/61057744/how-to-add-multiple-event-listeners-for-the-same-react-component
