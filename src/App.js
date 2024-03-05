import logo from './logo.svg';
import React  from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route , Routes} from 'react-router-dom'
import  Workshop  from './pages/Workshop.jsx';
import Profile  from './pages/Profile.jsx';
import Election from './pages/Election.jsx';
import Notification from './pages/Notification.jsx';



function App() {
  return (
    
    <BrowserRouter>
      <Sidebar>
    <Routes>
      <Route path ="/"element={<Dashboard/>}/>
      <Route path ="/dashboard"element={<Dashboard/>}/>
      <Route path ="/election"element={<Election/>}/>
      <Route path ="/notification"element={<Notification/>}/>
      <Route path ="/workshop"element={<Workshop/>}/>
      <Route path ="/profile"element={<Profile/>}/>
    </Routes>
    </Sidebar>
    </BrowserRouter>
      
    
  );
}

export default App;
