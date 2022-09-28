import React from "react";
import { useAppSelector } from "./redux/hooks";
import { useRoutes } from "./routes";

function App() {
  const { auth } = useAppSelector((state) => state.root);
  const routes = useRoutes(auth);
  
  return routes;
}

export default App;
