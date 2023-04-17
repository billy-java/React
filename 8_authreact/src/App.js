import Home from "./Pages/Home/Home";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //Switch est remplacer par Routes
import PrivateHome from "./Pages/PrivateHome/PrivateHome";

import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/eingelogenHome" element={<PrivateHome />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
