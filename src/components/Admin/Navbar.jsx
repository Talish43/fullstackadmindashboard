import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ isActive }) => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isHovered, setIsHovered] = useState(null);

  const handleMouseEnter = (submenuId) => {
    if (document.body.classList.contains('sidebar-icon-only')) {
        setIsHovered(submenuId);
      } else {
        setIsHovered(null);
      }
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  const toggleSubmenu = (submenuId) => {
    setActiveSubmenu(activeSubmenu === submenuId ? null : submenuId);
  };

  const navItems = [
    {
      title: 'Dashboard',
      icon: 'icon-layout',
      submenuId: 'dashboard',
      links: [],
    },
    {
      title: 'Users',
      icon: 'icon-layout',
      submenuId: 'users',
      links: [
        { title: 'Add Users', path: '/' },
        { title: 'Manage Users', path: '/' },
      ],
    },
    {
      title: 'Pages',
      icon: 'icon-layout',
      submenuId: 'pages',
      links: [
        { title: 'Add Pages', path: '/' },
        { title: 'Manage Pages', path: '/' },
      ],
    },
    // Add more navigation items as needed
  ];

  return (
    <nav className={`sidebar sidebar-offcanvas ${isActive ? 'active' : ''}`} id="sidebar">
      <ul className="nav">
        {navItems.map((item, index) => (
          <li  key={index}
          className={`nav-item ${activeSubmenu === item.submenuId ? 'active' : ''} ${isHovered === item.submenuId ? 'hover-open' : ''}`}
          onMouseEnter={() => handleMouseEnter(item.submenuId)}
          onMouseLeave={handleMouseLeave}
          >
          <NavLink 
            className={`nav-link`} 
            data-toggle="collapse" 
            href="#auth" aria-expanded="false" aria-controls="auth"
            onClick={() => toggleSubmenu(item.submenuId)}
            >
            <i className={`${item.icon} menu-icon`}></i>
            <span className="menu-title">{item.title}</span>
            {item.links.length > 0 && <i className="menu-arrow"></i>}
          </NavLink>
          {item.links.length > 0 && (
            <div 
            className={`collapse ${activeSubmenu === item.submenuId ? 'show' : ''}`} id={item.submenuId} >
              <ul className="nav flex-column sub-menu">
                  {item.links.map((link, subIndex) => (
                    <li key={subIndex} className="nav-item">
                      <NavLink className="nav-link" to={link.path}>
                        {link.title}
                      </NavLink>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
