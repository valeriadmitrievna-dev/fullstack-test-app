import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";

export const useRoutes = (auth: boolean) => {
  if (auth) {
    return (
      <Routes>
        <Route path="/" element={<div>todo app</div>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  } else
    return (
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/signin" replace />} />
      </Routes>
    );
};
