import React from "react";

import react from "../assets/react-js.png";
import gatsby from "../assets/gatsbyjs.png";
import git from '../assets/Dark/github.png'
import mail from '../assets/Dark/mail.png'
import gitsvg from '../assets/github.svg'

const links = [
  { url: "mailto: osahonanefe@yahoo.com", label: "Say Hello" },
//   { url: "https://ko-fi.com/taniarascia", label: "Ko-Fi" },
//   { url: "https://patreon.com/taniarascia", label: "Patreon" },
//   { url: "https://www.taniarascia.com/rss.xml", label: "RSS" },
  // { url: "https://github.com/efeosah", label: "GitHub" },

];
const madeWithLinks = [
  { url: "https://reactjs.org/", label: "React", icon: react },
  { url: "https://www.gatsbyjs.org/", label: "Gatsby", icon: gatsby },
  // { url: "https://github.com/efeosah", label: "GitHub", icon: git },
];

export const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <nav>
          <span className="desktop-only">Made by Efe Osah. Inspired by<a style={{display : "inline"}} href="https://github.com/taniarascia" target="_blank">Tania Rascia</a></span>
            
        </nav>
        <nav>

          {links.map((link) => (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                key={link.url}
              >
                {link.label}
              </a>
            ))}
        </nav>
        {/* <nav>
          {madeWithLinks.map((link) => (
            <a
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
              key={link.url}
            >
              <span>{link.label}</span>
              <img src={link.icon} alt={link.label} />
            </a>
          ))}
          
        </nav> */}
      </section>
    </footer>
  );
};
