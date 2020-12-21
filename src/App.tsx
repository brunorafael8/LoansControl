import React from "react";
import { UserProvider } from "./context/UserContext";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <UserProvider>
      <HomePage />
    </UserProvider>
  );
}

export default App;
