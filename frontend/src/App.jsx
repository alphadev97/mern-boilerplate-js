import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={SignIn} />
        <Route path="/sign-up" Component={SignUp} />
      </Routes>
    </Router>
  );
}

export default App;
