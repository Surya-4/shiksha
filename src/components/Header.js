import React, { useContext } from 'react'
import { Link } from 'react-router-dom'; 
import {signContext} from '../App'

export default function Header() {
  const {issignedin,setIssignedin}=useContext(signContext)
  return (
    <div>
      <div className="header">
      <Link to="/">UrShiksha</Link>
      <nav>
        <Link to="/courses">Courses</Link>
        <Link to="/aboutus">About Us</Link>
        {!issignedin && <Link to="/login">Login</Link>}
        {issignedin && <Link to="/" onClick={ ()=>{
          setIssignedin(false)
          }}>Logout</Link>}
        {!issignedin && <Link to='/register'>Register</Link>}
      </nav>
    </div>
    </div>
  );
}
