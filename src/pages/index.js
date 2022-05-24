import React from "react";
import { Link } from "gatsby";
import { Layout } from "../components/Layout";
import { Intro } from "../components/Intro";
import Helmet from "react-helmet";


import gitdark from "../assets/Dark/github.png";
import linkedindark from "../assets/Dark/linkedin.png";

import gitlight from "../assets/Light/githublight.png";
import linkedinlight from '../assets/Light/linkedinlight.png'



import config from '../utils/config'

export default function IndexPage({ data }) {

  return (
    <>
      <Intro />
    </>
  );
}

IndexPage.Layout = Layout;
