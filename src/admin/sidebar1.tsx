import React,{Fragment, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './sidebar1Style.css'



export const Sid = () => {
    const date = new Date();
    return (
<Fragment>
<div className="header">
  <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"/>
  
  <label htmlFor="openSidebarMenu"  className="sidebarIconToggle">
    <div className="spinner diagonal part-1"></div>
    <div className="spinner horizontal"></div>
    <div className="spinner diagonal part-2"></div>
  </label>
    <label className="logoSideBar">Laboratoire Centrale de CHU Hassan II - Fes -</label>
  <div id="sidebarMenu">  
    <ul className="sidebarMenuInner">
      <li>Utilisateur Status<span>date : {date.toString()}</span></li>
      <li><Link to="/admin/mohammed/Dashboard">Dashboard</Link></li>
      <li><Link to="/admin/mohammed/staff/list-all-employers">Personelles</Link></li>  
      <li><Link to="/admin/mohammed/gardes/list-all">Garde</Link></li>
      <li><Link to="/admin/mohammed/tickets/list-all">Tickets</Link></li>
      <li><Link to="/admin/mohammed/settings/">Parameters</Link></li>
    </ul>
  </div>
</div>
  </Fragment>
    )
}