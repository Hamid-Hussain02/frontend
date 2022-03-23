import './App.css';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Login from './pages/login';
import Signup from './pages/Signup';
import Temp from './pages/temp'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/temp" element={<Temp/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
