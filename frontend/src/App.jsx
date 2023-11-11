import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import Layout from "./components/Layout";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import UserProfilePage from "./pages/UserProfilePage";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
          {/* Nesecitan estar autenticados para acceder a estas paginas: */}
          <Route element={<PrivateRoute />}>
            <Route  path="/home" element={<HomePage />} />
            <Route path="/:name" element={<UserProfilePage />} />
          </Route>
          
        </Route>

        {/* Si no estan autenticados: */}
        <Route index element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
