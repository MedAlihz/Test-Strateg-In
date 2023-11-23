import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import ListUsers from './Listusers';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<LoginForm />} /> 
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/users" element={<ListUsers />} />
    
      </Routes>
    </Router>
  );
}

export default App;
