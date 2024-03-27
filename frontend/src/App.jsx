import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={SignIn} />
        <Route path="/sign-up" Component={SignUp} />
        <Route path="/home" Component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
