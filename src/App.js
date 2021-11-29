import './assets/css/default.css';
import Start from './pages/StartPage/index'
import ShowRestaurant from './pages/ShowRestaurant';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Start />} />
          <Route exact path="/restaurant/:id" element={<ShowRestaurant />}/>
        </Routes>
    </div>
  );
}

export default App;
