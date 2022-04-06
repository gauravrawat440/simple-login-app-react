import "./App.css";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JsonData from "./pages/JsonData";
import TableComp from "./pages/TableComp";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/table" element={<TableComp />} />
          <Route path="/jsondata" element={<JsonData />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
