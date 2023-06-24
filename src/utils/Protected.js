import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { signContext } from '../App';
export default function Protected({children}) {
  const {issignedin,setIssignedin} =useContext(signContext)
  if(!issignedin)
  {
    alert('PLease Sign in to view Courses');
    return <Navigate to='/' replace/>
  }
  return children;
}
