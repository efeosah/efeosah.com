import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import { Layout } from "../components/Layout";

import config from '../utils/config.js'

const ProjectList = [
    {
        name: "Portoflio V1",
        tagline: "Personal Portfolio for Onanefe Osah",
        image: null,
        url: "https://efeosah.netlify.app/",
        repo: "https://github.com/efeosah/efeosah.com",
    },
    {
        name: "Nutrition V1",
        tagline: "A simple web app to visualize nutrition facts of food items",
        image: null,
        url: "https://nutrifactv1.netlify.app",
        repo: "https://github.com/efeosah/NutritionV1",
        description: `
                    This was a side project to help me improve my understanding of developing react apps.
                    I made use of the Nutritionix v1.1 API to construct this, the API provides GET methods for 
                    foods by UPC number and foods by name.
                    Currently my product only makes use of the foods by name method returning a list of food items from the query and provides
                    the nutrition facts for selected items as provided by the API 
                  `,
    },
    {
        name: "Recipe API",
        tagline: "A REST API for food recipes",
        image: null,
        url: null,
        description: `
                    I built this API while learning how to use and develop web apps using open source API's. I couldnt find 
                    an API that provided all the info I needed so I decided to create one using a recipe database I have hosted on MongoDB.
                    
                    The API is restful and makes use of a MERN stack for development
                  `,
    },
    {
        name: "Spotify Clone//miscdisc ",
        tagline: "A spotify clone web app with a focus on song recommendations to the user",
        image: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png",
        url: null,
        repo : "https://github.com/efeosah/miscdisc-spotify",
        description: `
                    Clone app project I made using spotifys API. The main reason for the project was to create a web app 
                    that recommended new songs for me based on my listening history, but I stretched it out to be 
                    a clone-like Spotify app instead.
                  `,
    },
    //Add Misc projects
];
export default function Project({ data }) {
    return (
        <>
            <Helmet title={`Projects | ${config.siteTitle}`} />

            <article>
                <header>
                    <div className="container">
                        <h1>Projects</h1>
                        <p className="description">
                            A few highlights of my open-source projects. View
                            them all{" "}
                            <a href="https://github.com/efeosah">
                                on GitHub
                            </a>
                            .
                        </p>
                    </div>
                </header>

                <section className="projects large container">
                    {ProjectList.map((project) => (
                        <div className="project" key={project.name}>
                            <h2>{project.name}</h2>
                            {project.image && (
                                <img src={project.image} alt={project.name} />
                            )}
                            <div className="links tags">
                                {project.writeup && (
                                    <Link to={project.writeup}>Write-up</Link>
                                )}
                                <a
                                    href={project.repo}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Source
                                </a>
                                {project.url && (
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Demo
                                    </a>
                                )}
                            </div>
                            <p className="description">{project.tagline}</p>
                        </div>
                    ))}
                </section>
            </article>
        </>
    );
}

Project.Layout = Layout;
