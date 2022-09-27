import { Routes, Route, Navigate } from "react-router-dom";

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
        <Route path="/signin" element={<div>signin</div>} />
        <Route path="/signup" element={<div>signup</div>} />
        <Route path="*" element={<Navigate to="/signin" replace />} />
      </Routes>
    );
};
