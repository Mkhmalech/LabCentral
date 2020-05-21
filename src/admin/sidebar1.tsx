import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './sidebar1Style.css'
import { useSelector } from 'react-redux';
import moment from 'moment';

export const Sid = () => {
  const date = moment().format('LLL');
  const username = useSelector((state:any)=>state.auth.login.username)
  return (
    <Fragment>
      <div className="header">
        <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />

        <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
          <div className="spinner diagonal part-1"></div>
          <div className="spinner horizontal"></div>
          <div className="spinner diagonal part-2"></div>
        </label>
        <label className="logoSideBar" style={{ float: "left", color: "#FFF", padding: "1.1em" }}>Laboratoire Centrale de CHU Hassan II - Fes -</label>
        <div id="sidebarMenu">
          <ul className="sidebarMenuInner">
            <li>Utilisateur Status<span>date : {date.toString()}</span></li>
            <li><Link to={`/admin/${username}/Dashboard`}>Dashboard</Link></li>
            <li><Link to={`/admin/${username}/staff/list-all-employers`}>Personelles</Link></li>
            <li><Link to={`/admin/${username}/gardes/list-all`}>Garde</Link></li>
            <li><Link to={`/admin/${username}/tickets/list-all`}>Tickets</Link></li>
            <li><Link to={`/admin/${username}/settings/`}>Parameters</Link></li>
          </ul>
        </div>
      </div>
    </Fragment>
  )
}