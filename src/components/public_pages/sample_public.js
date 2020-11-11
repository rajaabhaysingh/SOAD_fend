import React, {useState} from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import { Jumbotron, Button, Container, Row, Col, Modal, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import "../../styles/publicpages.css"
import mans from "../../images/man.jpg"
import Profile from "./profile"
import Jobs from "./jobs"
import Projects from "./projects"
import Experience from "./experience"
import {BrowserRouter, Route, Link, NavLink} from "react-router-dom";
  

const Sample_Public = () => {

  return (
    <BrowserRouter>
      <div className="themaindiv">
        <div className="row no-gutters theinnermaindiv">
          {/* First Div */}
          <div className="col-sm-2 col-md-2 firstboxes">
          
            <div className="text-center h3 text-white mt-4"><i className="fas fa-laugh-wink text-white text-bold"></i> Abhijit Patil</div>
            
            <div className="pl-3 h6 text-white mt-5"><i className="fas fa-user-alt text-white text-bold"></i> <NavLink to="/public/profile" className="text-white">Profile</NavLink></div>
            <div className="pl-3 h6 text-white mt-5"><i className="fa fa-building text-white text-bold"></i> <NavLink to="/public/jobs" className="text-white">Jobs</NavLink></div>
            <div className="pl-3 h6 text-white mt-5"><i className="fas fa-user-alt text-white text-bold"></i> <NavLink to="/public/experience" className="text-white">Experience</NavLink></div>
            <div className="pl-3 h6 text-white mt-5"><i className="fas fa-user-alt text-white text-bold"></i> <NavLink to="/public/info" className="text-white">Personal Information</NavLink></div>
            <div className="pl-3 h6 text-white mt-5"><i className="fa fa-gear text-white text-bold"></i> <NavLink to="/public/settings" className="text-white">Settings</NavLink></div>
            <div className="pl-3 h6 text-white mt-5"><i className="fa fa-sign-out text-white text-bold"></i> <NavLink to="/public/logout" className="text-white">Logout</NavLink></div>
            
          </div>
          {/* Second Div */}
          <div className="col-10 col-md-10 secondboxes">
            {/* INNER NAV BAR */}
            <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
              <div className="container-fluid"><button className="btn btn-link d-md-none rounded-circle mr-3" type="button"><i className="fas fa-bars"></i></button>
                  <form className="form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search w-25">
                      <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..."/ >
                          <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search"></i></button></div>
                      </div>
                  </form>
                  <ul className="nav navbar-nav flex-nowrap ml-auto">
                      <li className="nav-item dropdown d-sm-none no-arrow"><i className="fas fa-search"></i>
                          <div className="dropdown-menu dropdown-menu-right p-3 animated--grow-in " role="menu" aria-labelledby="searchDropdown">
                              <form className="form-inline mr-auto navbar-search w-100">
                                  <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..."/ >
                                      <div className="input-group-append"><button className="btn btn-primary py-0 m-5" type="button"><i className="fas fa-search"></i></button></div>
                                  </div>
                              </form>
                          </div>
                      </li>
                      <li className="nav-item dropdown no-arrow mx-1 mr-3" role="presentation">
                          <div className="nav-item dropdown no-arrow"><span className="badge badge-danger badge-counter">3+</span><i className="fas fa-bell fa-fw"></i>
                              <div className="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in"
                                  role="menu">
                                  </div>
                          </div>
                      </li>
                      <li className="nav-item dropdown no-arrow mx-1 mr-3" role="presentation">
                          <div className="nav-item dropdown no-arrow"><i className="fas fa-envelope fa-fw"></i><span className="badge badge-danger badge-counter">7</span>
                              <div className="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in"
                                  role="menu">
                                  </div>
                          </div>
                          <div className="shadow dropdown-list dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown"></div>
                      </li>
                      <div className="d-none d-sm-block topbar-divider"></div>
                      <li className="nav-item dropdown no-arrow mr-3" role="presentation">
                          <div className="nav-item dropdown no-arrow"><span className="d-none d-lg-inline mr-2 text-gray-600 small">Abhijit Patil</span><img className="border rounded-circle img-profile" src={mans} alt="imagea" height="30px" width="30px"/>
                      </div>
                      </li>
                      </ul>
                    </div>
                </nav>
                {/* CONTENT */}
                <Route path="/public/jobs" component={Jobs} exact/>
                <Route path="/public/profile" component={Profile} exact/>
                <Route path="/public" component={Profile} exact/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Sample_Public;



