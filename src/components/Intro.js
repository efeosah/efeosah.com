import React, {useEffect, useState} from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";

import config from "../utils/config";


export const Intro = () => {

    return (
        <>
        <Helmet title={config.siteTitle} />

        <article className="hero">
            <header>
            <div className="container">
                <div className="flex-content">
                <div>
                    <h1>Hi, I'm Efe.</h1>
                    <p className="subtitle small">
                    I am a 4th year Computer Science student at the University of
                    Windsor, with a passion for game development. Seeking full
                    time opportunities for 2022, see my{" "}
                    <Link to="/aboutme">resume</Link> or shoot me an{" "}
                    <a href="mailto: osahonanefe@yahoo.com">email</a> if you want
                    to chat.
                    </p>
                </div>
                {/* <img src={looking} alt="Me" className="main-image" /> */}
                </div>
                <p className="hero-buttons">
                <Link to="/aboutme" className="hero-button">
                    {/* <img src={gitlight} alt="Git" /> */}
                    More about me
                </Link>
                <Link to="/aboutme" className="hero-button">
                    {/* <img
                    // src={theme === "dark" ? gitlight : gitdark}
                    // alt="Git"
                    /> */}
                    GitHub
                </Link>
                <Link to="/aboutme" className="hero-button">
                    {/* <img src={gitlight} alt="Git" /> */}
                    LinkedIn
                </Link>
                </p>
            </div>
            </header>
        </article>
        </>
    );
};
