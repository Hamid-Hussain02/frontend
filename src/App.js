import './App.css';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Login from './pages/login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import Invoice from './components/invoice'
import Table from './pages/AdminDashboard'
import AllReservations from './components/AllReservations.js';
import MakeReservation from './components/MakeReservation';
import MiniDrawer from './pages/AdminDashboard';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/admin-dashboard" element={<AdminDashboard/>}>
            
          <Route path="/admin-dashboard/all-reservations" element={<AllReservations/>}/>
          <Route path="/admin-dashboard/new-reservation" element={<MakeReservation/>}/>
          </Route>
          <Route path="/invoice" element={<Invoice/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
