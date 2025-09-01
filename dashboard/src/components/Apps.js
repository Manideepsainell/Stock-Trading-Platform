import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />} /> 
        {/* notice the * for nested routes */}
      </Routes>
    </Router>
  );
}

export default App;
