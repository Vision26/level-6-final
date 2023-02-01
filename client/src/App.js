import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './auth/NavBar'
import Auth from './auth/Auth'
import ProtectedRoute from './auth/ProtectedRoute'
import Profile from './components/Profile'
import Global from './components/Global'
import './App.css'
import { AuthContext } from './auth/AuthContext'

function App() {
    const { token, logout } = useContext(AuthContext)
    return (
        <div className='app'>
            {token && <NavBar logout={logout} />}

            <Routes>

                <Route
                    exact path="/"
                    element={token ? <Navigate to="/profile" /> : <Auth />}
                />
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute token={token} redirectTo="/">
                            <Profile />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/global"
                    element={
                        <ProtectedRoute token={token} redirectTo="">
                            <Global />
                        </ProtectedRoute>
                    }
                />

            </Routes>
        </div>
    )
}

export default App