import { HomePage } from './pages/HomePage';
import { MyFridge } from './pages/MyFridge';
import { LoginPage } from './pages/LoginPage';
import { RecipePage } from './pages/RecipePage';
import { ProfilePage } from './pages/ProfilePage';
import { RegisterTeacher } from './pages/RegisterTeacher';
import { RegisterTPP } from './pages/RegisterTPP';
import { RegisterPupil } from './pages/RegisterPupil';
import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RegisterPage } from './pages/RegisterPage';
import IngredientSearchPage from './pages/IngredientSearchPage';
import { ShoppingListPage } from './pages/ShoppingListPage';


function App() {
  return (
    <div className="App">
      <Router> 
          <Routes>
            <Route path="/" element={ <HomePage/> }></Route>
            <Route path="/RecipePage" element={ <RecipePage/> }></Route>
            <Route path="/MyFridge" element={ <MyFridge/> }></Route>
            <Route path="/LoginPage" element={ <LoginPage/> }></Route>
            <Route path="/RegisterPage" element={ <RegisterPage/> }></Route>
            <Route path="/RegisterTPP" element={ <RegisterTPP/> }></Route>
            <Route path="/RegisterPupil" element={ <RegisterPupil/> }></Route>
            <Route path="/RegisterTeacher" element={ <RegisterTeacher/> }></Route>
            <Route path="/ProfilePage" element={ <ProfilePage/> }></Route>
            <Route path="/ShoppingListPage" element={ <ShoppingListPage/> }></Route>
            <Route path="/IngredientSearchPage" element={ <IngredientSearchPage/> }></Route>

          </Routes>
      </Router>
    </div>
  );
}

export default App;
