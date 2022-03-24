import './App.css';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Login from './pages/login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
