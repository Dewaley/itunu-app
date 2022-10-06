import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthLayout from './layout/AuthLayout';
import DashboardHome from './pages/DashboardHome/DashboardHome'
import ErrorPage from './pages/404';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="dashboard/user" element={<AuthLayout/>}>
          <Route index element={<DashboardHome />} />
          <Route path="*" element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </Router>
    // <h1>Hello</h1>
  );
}

export default App;
