import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './auth/AuthContext'
import { PostProvider } from './post/PostContext'
import { CommentProvider } from './comments/CommContext'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <BrowserRouter>
        <CommentProvider>
        <PostProvider>
        <AuthProvider>
        <App />
        </AuthProvider>
        </PostProvider>
        </CommentProvider>
        </BrowserRouter>
    </React.StrictMode>
)