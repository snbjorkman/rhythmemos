import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {


  async function logout() {
    const res = await fetch("/registration/logout/", {
      credentials: "same-origin", // include cookies!
    });

    if (res.ok) {
      // navigate away from the single page app!
      window.location = "/registration/sign_in/";
    } else {
      // handle logout failed!
    }
  }

  return (
    <>
      <div className='pageDisplayer'>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/my-memos">My Memos</Link>
          <Link to="/about">About | How To Use</Link>
        </nav> 
        <Outlet />
      </div>
    </>
  )
}

export default App;
