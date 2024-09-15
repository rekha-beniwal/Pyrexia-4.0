import React from 'react';
import "./login.css";
import { Link } from 'react-router-dom'
function Notfound() {
    
    return (
        <div className="login-page flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
  <h1 className="text-3xl font-bold text-red-600 mb-4">
    User Not Found
  </h1>
  <Link to="/signup" className="text-[#083765] hover:underline text-lg">
    Signup
  </Link>
</div>

    );
}

export default Notfound;
