import { createContext, useState } from "react";

export const AppContext = createContext();

function AppProvider({ children }) {
  const [company] = useState("AKR Express Pvt Ltd");

  return (
    <AppContext.Provider value={{ company }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;