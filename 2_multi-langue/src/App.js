import React from "react";
import Contenu from "./Components/Contenu/Contenu";
import ToggleLangs from "./Components/ToggleLangs/ToggleLangs";
import ContextProvider from "./context/langContext";

function App() {
  return (
    <div>
      <ContextProvider>
        <ToggleLangs />
        <Contenu />
      </ContextProvider>
    </div>
  );
}

export default App;
