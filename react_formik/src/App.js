import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Customers from './Customers';
import UseFormmikHook from "./UseFormikHook";
function App() {
  return (
    <div className="App">
      <Router>  
        <Routes>
          <Route path="/" element={<Customers/>} />
          <Route path="/use-formik-hook" element={<UseFormmikHook/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
