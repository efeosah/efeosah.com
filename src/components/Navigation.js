import React from 'react';
import { Link } from 'gatsby';


//logos
import { GitHub } from '../assets/Github'
import { Mail } from '../assets/Mail'
import { LinkedIn } from '../assets/LinkedIn'
import temp from '../assets/temp.png'


const mainNavItems = [
    // { url: '/blog', icon: blog, label: 'Articles' },
    { url: '/projects', icon: temp, label: 'Projects' },
    { url: '/me', icon: temp, label: 'About me' },

                      
]
  
const socialNavItems = [
    { url: 'https://github.com/efeosah', icon: GitHub, label: 'GitHub' },
    { url: 'https://github.com/efeosah', icon: temp, label: 'LinkedIn' },
]

export const Navigation = ({ onUpdateTheme, theme }) => {

  return (
    <header className="navigation">
        <div className="navigation-inner">
            <nav className="brand-section">
                {/* <button
                    onClick={() => setCollapsed((prev) => !prev)}
                    className="desktop-only collapse-button"
                    title="Collapse Sidebar"
                >
                    <Hamburger />
                </button> */}

          <Link to="/" className="brand">
            <span>Efe Osah</span>
          </Link>
        </nav>
        <div>
          <nav>
            {mainNavItems.map((item) => (
              <Link to={item.url} key={item.label} activeClassName="active">
                <img src={item.icon} alt={item.label} />
                <div className="tooltip">{item.label}</div>
              </Link>
            ))}
          </nav>
        </div>
        <div className="toolbar-section">
          <nav className="social-nav">
            {socialNavItems.map((item) => (
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                key={item.label}
              >
                <img src={item.icon} alt={item.label} />
              </a>
            ))}
          </nav>
          <button onClick={onUpdateTheme} className="theme-switcher">
            {/* <img src={moon} alt="Theme" /> */}
          </button>
        </div>
      </div>
    </header>
  )

}


