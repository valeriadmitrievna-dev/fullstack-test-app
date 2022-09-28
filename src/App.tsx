import React from "react";
import Loader from "./components/loader";
import Message from "./components/message";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { getUserThunk } from "./redux/thunks";
import { useRoutes } from "./routes";

function App() {
  const dispatch = useAppDispatch();
  const { auth, user, loading, error } = useAppSelector((state) => state.root);
  const routes = useRoutes(auth && !!user);

  React.useEffect(() => {
    if (auth) {
      dispatch(getUserThunk());
    }
  }, [auth]);

  return (
    <>
      {!!error && <Message type="error">{error}</Message>}
      {loading ? <Loader className="app-loader" /> : routes}
    </>
  );
}

export default App;
