import React, { useEffect, useState } from 'react'

import DarkPng from '../assets/website/dark-mode-button.png'
import lightPng from '../assets/website/light-mode-button.png'

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ?
    localStorage.getItem('theme') : "light"
  )

  useEffect(()=>{
    if(theme === 'dark'){
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme','dark')
    }else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme','light')
    }
  }, [theme])

  const ChangeTheme = () => {
    if(theme === 'light'){
      setTheme('dark')
    }else {
      setTheme('light')
    }
  }

  return (
    <>
      <div className=' relative'>
        <img src={DarkPng} onClick={ChangeTheme}  className={` w-12 cursor-pointer drop-shadow-sm
              transition-all duration-300 absolute right-0  z-10
              ${theme !== 'dark' ? " opacity-0":"opacity-100"}`} alt="" />
        <img src={lightPng} onClick={ChangeTheme}  className=' w-12 cursor-pointer drop-shadow-sm
         transition-all duration-300 ' alt="" />
      </div>
    </>
  )
}

export default DarkMode
