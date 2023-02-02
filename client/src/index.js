import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './auth/AuthContext'
import { PostProvider } from './post/PostContext'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <BrowserRouter>
        <PostProvider>
        <AuthProvider>
        <App />
        </AuthProvider>
        </PostProvider>
        </BrowserRouter>
    </React.StrictMode>
)