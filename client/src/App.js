import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './auth/NavBar'
import Auth from './auth/Auth'
import ProtectedRoute from './auth/ProtectedRoute'
import Profile from './components/Profile'
import Community from './components/Community'
import About from './components/About'
import Contact from './components/Contact'
import './App.css'
import { AuthContext } from './auth/AuthContext'
import Footer from './Footer'

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
                    path="/community"
                    element={
                        <ProtectedRoute token={token} redirectTo="">
                            <Community />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/about"
                    element={
                        <ProtectedRoute token={token} redirectTo="">
                            <About />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/contact"
                    element={
                        <ProtectedRoute token={token} redirectTo="">
                            <Contact />
                        </ProtectedRoute>
                    }
                />

            </Routes>
{/* <Footer /> */}
        </div>
    )
}

export default App