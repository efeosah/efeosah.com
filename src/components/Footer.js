import React from "react";

import react from "../assets/react.svg";
import gatsby from "../assets/gatsby.svg";
import git from '../assets/Dark/github.png'
import mail from '../assets/Dark/mail.png'
import gitsvg from '../assets/github.svg'

const links = [
  { url: "mailto: osahonanefe@yahoo.com", label: "Mail" },
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
          <span className="desktop-only">Made by Efe Osah</span>
          
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
        <nav>
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
          
        </nav>
      </section>
    </footer>
  );
};
