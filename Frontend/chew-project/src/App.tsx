
import './App.css';
import { HomePage } from './pages/HomePage';
import { MyFrigde } from './pages/MyFrigde';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router> 
        <Navbar />
          <Routes>
            <Route path="Home" element={ <HomePage/> }></Route>
            <Route path="Add" element={ <MyFrigde/> }></Route>
          </Routes>
      </Router>
        <HomePage />
    </div>
  );
}

export default App;
