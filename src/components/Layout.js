import React, { useState, useEffect } from 'react';
import { useLocation } from '@reach/router'

//TODO
import { Navigation } from './Navigation';
import { Footer } from './Footer';

import '../assets/moontheme.css';
import '../assets/lighttheme.css';

function setDarkTheme(setTheme){

  localStorage.setItem('theme', 'dark')
  setTheme('dark')
  document.body.style.backgroundColor = '#282c34'

}

function setLightTheme(setTheme){

  localStorage.setItem('theme', 'light')
  setTheme('dark')
  document.body.style.backgroundColor = 'white'
  
}

function getMainClass(theme) {
  let classString = theme

  // if (collapsed) {
  //   classString += ' collapsed'
  // }

  return classString
}

export const Layout = ({ children }) =>{

  const location = useLocation();
  const [theme, setTheme] = useState('dark');
  const slug = location.pathname

  const onUpdateTheme = (theme) => {
    if (theme === 'dark') {
      setLightTheme(setTheme)
    } else if (theme === 'light') {
      setDarkTheme(setTheme)
    }
    // } else if (theme === 'sepia') {
    //   setLightTheme(setTheme)
    // }
  }



  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'dark' || !savedTheme) setDarkTheme(setTheme)
    // if (savedTheme === 'sepia') setSepiaTheme(setTheme)
    if (savedTheme === 'light') setLightTheme(setTheme)
  }, [])


  return (
    <>
      {/* <Helmet>
        <link rel="shortcut icon" type="image/png" href={favicon} />
      </Helmet> */}

      <div className={getMainClass(theme, slug)}>
        {/* <Sidebar setCollapsed={setCollapsed} /> */}
        <Navigation
        //   setCollapsed={setCollapsed}
          onUpdateTheme={() => onUpdateTheme(theme)}
          theme={theme}
        />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )

}