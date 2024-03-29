import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import Home from "./pages/Home";
import AuthCallback from "./pages/AuthCallback";
import UserProfile from "./pages/UserProfile";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero>
            <Home />
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallback />} />
      <Route
        path="/user-profile"
        element={
          <Layout>
            <UserProfile />
          </Layout>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
