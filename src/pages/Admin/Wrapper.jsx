import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/admin/vendors/feather/feather.css';
import '../../assets/admin/vendors/ti-icons/css/themify-icons.css';
import '../../assets/admin/vendors/css/vendor.bundle.base.css';
import '../../assets/admin/vendors/ti-icons/css/themify-icons.css';
import '../../assets/admin/css/vertical-layout-light/style.css';
import logo from '../../assets/admin/images/logo.svg';
import logoMini from '../../assets/admin/images/logo.svg';
import profileImage from '../../assets/admin/images/faces/face28.jpg';
import Navbar from '../../components/Admin/Navbar';
const Wrapper = ({children}) => {
  const [isActive, setIsActive] = useState(false);
  const [activeNotification, setActiveNotification] = useState(false);
  const toggleActive = () => {
    setIsActive(!isActive);
  };
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
  const toggleSidebarMinimize = () => {
    setIsSidebarMinimized(!isSidebarMinimized);
    document.body.classList.toggle('sidebar-icon-only');
  };
  
  const toggleNotifcation = () => {
    setActiveNotification(!activeNotification);
  };
  return (
    <>
       <div className="container-scroller">
        {/* partial:partials/_navbar.html */}
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
          <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
            <a className="navbar-brand brand-logo mr-5" href="index.html"><img src={logo} className="mr-2" alt="logo" /></a>
            <a className="navbar-brand brand-logo-mini" href="index.html"><img src={logoMini} alt="logo" /></a>
          </div>
          <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
            <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize" onClick={toggleSidebarMinimize}>
              <span className="icon-menu" />
            </button>
            <ul className="navbar-nav mr-lg-2">
              <li className="nav-item nav-search d-none d-lg-block">
                <div className="input-group">
                  <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
                    <span className="input-group-text" id="search">
                      <i className="icon-search" />
                    </span>
                  </div>
                  <input type="text" className="form-control" id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search" />
                </div>
              </li>
            </ul>
            <ul className="navbar-nav navbar-nav-right">
              <li className="nav-item dropdown">
                <Link className="nav-link count-indicator dropdown-toggle" to="/" data-toggle="dropdown" onClick={toggleNotifcation}>
                  <i className="icon-bell mx-0" />
                  <span className="count" />
                </Link>
                <div 
                 className={`dropdown-menu dropdown-menu-right navbar-dropdown preview-list ${activeNotification ? 'show' : ''}`}>
                  <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                  <Link className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-success">
                        <i className="ti-info-alt mx-0" />
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <h6 className="preview-subject font-weight-normal">Application Error</h6>
                      <p className="font-weight-light small-text mb-0 text-muted">
                        Just now
                      </p>
                    </div>
                  </Link>
                  <Link className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-warning">
                        <i className="ti-settings mx-0" />
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <h6 className="preview-subject font-weight-normal">Settings</h6>
                      <p className="font-weight-light small-text mb-0 text-muted">
                        Private message
                      </p>
                    </div>
                  </Link>
                  <Link className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-info">
                        <i className="ti-user mx-0" />
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <h6 className="preview-subject font-weight-normal">New user registration</h6>
                      <p className="font-weight-light small-text mb-0 text-muted">
                        2 days ago
                      </p>
                    </div>
                  </Link>
                </div>
              </li>
              <li className={`nav-item nav-profile dropdown ${activeNotification ? 'show' : ''}`} >
                <Link className="nav-link dropdown-toggle" href="/" data-toggle="dropdown">
                  <img src={profileImage} alt="profile" />
                </Link>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown">
                  <Link className="dropdown-item">
                    <i className="ti-settings text-primary" />
                    Settings
                  </Link>
                  <Link className="dropdown-item">
                    <i className="ti-power-off text-primary" />
                    Logout
                  </Link>
                </div>
              </li>
            </ul>
            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas" onClick={toggleActive}>
              <span className="icon-menu" />
            </button>
          </div>
        </nav>
        {/* partial */}
        <div className="container-fluid page-body-wrapper">
          {/* partial */}
          {/* partial:partials/_sidebar.html */}
          <Navbar isActive={isActive} />
          {/* partial */}
          {children}
          {/* main-panel ends */}
        </div>
        {/* page-body-wrapper ends */}
      </div>
    </>
  )
}

export default Wrapper


// DTK-2260/K0-DX