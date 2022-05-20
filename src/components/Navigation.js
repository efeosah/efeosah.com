import React from "react";
import { Link } from "gatsby";

//logos
import gitdark from "../assets/Dark/github.png";
import linkedindark from "../assets/Dark/linkedin.png";
import userdark from "../assets/Dark/user.png";
import eclipsedark from "../assets/Dark/eclipse.png";
import projectdark from "../assets/Dark/project.png";

import gitlight from "../assets/Light/githublight.png";
// import linkedinlight from '../assets/Light/linkedinlight.png'
import userlight from "../assets/Light/userlight.png";
import eclipselight from "../assets/Light/eclipselight.png";
import projectlight from "../assets/Light/projectlight.png";

const mainNavItems = [
  // { url: '/blog', icon: blog, label: 'Articles' },
  { url: "/projects", icon: projectdark, label: "Projects" },
  { url: "/me", icon: userdark, label: "About me" },
];

const socialNavItems = [
  { url: "https://github.com/efeosah", icon: gitdark, label: "GitHub" },
  { url: "https://github.com/efeosah", icon: linkedindark, label: "LinkedIn" },
];

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
            <img src={eclipsedark} alt="Theme" />
          </button>
        </div>
      </div>
    </header>
  );
};
