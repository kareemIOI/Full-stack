import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home pages/Home';
import Login from './pages/Login page/LogIn';
import Studentpage from './pages/Student page/Student.js'


import Admain from './pages/Admain pages/Admain';
import ThemeProvider from './ThemeContext';

function App() {
  window.onload = function () {
    window.scrollTo(0, 0)
  }
  return (
    <ThemeProvider>
      <div className="App">
        <Routes>
            <Route path='/*' element={<Home />} />
            {/* <Route path='/login' element={<Login />} /> */}
            <Route path='/stu/*' element={<Studentpage />} />
            <Route path='/manager/*' element={<Admain />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
