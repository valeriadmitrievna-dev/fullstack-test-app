import React from "react";
import { useRoutes } from "./routes";

function App() {
  const routes = useRoutes(false);
  return routes;
}

export default App;
