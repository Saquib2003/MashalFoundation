import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Login from './components/Login';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
