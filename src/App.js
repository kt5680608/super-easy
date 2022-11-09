import { useContext } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { AuthPage, MainPage } from "./pages";
function App() {
  const { currentUser } = useContext(AuthContext);
  const example = localStorage.getItem("firstLandingSuperEasy");

  const RequireAuth = ({ children }) => {
    return currentUser !== null ? children : <Navigate to="/auth" />;
  };

  return (
    <>
      <Routes>
        <Route path="/">
          <Route path="auth" element={<AuthPage />} />
          <Route
            index
            element={
              <RequireAuth>
                <MainPage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
