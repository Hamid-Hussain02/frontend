import './App.css';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Login from './pages/login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
