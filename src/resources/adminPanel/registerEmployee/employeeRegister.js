import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import {NavLink, useNavigate } from 'react-router-dom';

import '../../../css/reuseable.css'
import '../css/admin.css'

import { useEffect } from 'react';
const EmployeeRegister = () => {
  useEffect(() => {
    document.title = 'ASM | Admin';
  }, []);
  const navigate = useNavigate();
  function logoutButton() {
    navigate('/',{replace:true});
}
  return (
    <>
      <div className="main">
        <div className="navbar flex flex-row">
          <div className="logo flex align-center justify-start">
            <img src="../../image/logo_small.png" alt=""/>
          </div>
          <p className="welcome-text flex align-center justify-end" id="welcome_text">Welcome, Admin</p>
          <div className="logoutbutton-div flex align-center justify-center">
            <button className="logout" id="logout" onClick={logoutButton}><FontAwesomeIcon icon={faArrowRightFromBracket}/></button>
          </div>
        </div>
        <div className="body flex flex-row">
          <div className="admin-left-sidebar flex flex-column align-center justify-center">
          <div className="admin-image"></div>
          <div className="admin-control-buttons flex flex-column">
          <ul>
            <li className='flex align-center justify-center'><NavLink  to="/register-employee">Register Employee</NavLink></li>
            <li className='flex align-center justify-center'><NavLink  to="/search-employee">Search Employee</NavLink></li>
            <li className='flex align-center justify-center'><NavLink  to="/update-employee">Update Employee Data</NavLink></li>
            <li className='flex align-center justify-center'><NavLink  to="/delete-employee">Remove Employee</NavLink></li>
          </ul>
          

          </div>

          </div>
          <div className="admin-right"></div>
        </div>
      </div>
    </>
  );
};

export default EmployeeRegister
