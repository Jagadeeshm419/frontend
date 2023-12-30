import './App.css';
import { Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome';
import Signup from './components/Signup';
import Login from './components/Login';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/signup' element={<Signup />} exact />
        <Route path='/login' element={<Login />} exact />
        <Route path='/welcome' element={<Welcome />} exact />
      </Routes>
    </div>
  );
}

export default App;
