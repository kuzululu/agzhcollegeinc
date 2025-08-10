import { useEffect, useState, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'

import RootLayout from './shared/layouts/RootLayout'
import DefaultRootLayout from './shared/layouts/DefaultRootLayout'
import BannerLayout from './shared/layouts/BannerLayout'

import HomePage from './pages/Home'
import VisionPage from './pages/Vision'
import AboutPage from './pages/About'
import MissionPage from './pages/Mission'
import PageNotFound from './pages/PageNotFound'
import GalleryPage from './pages/Gallery'
import ContactPage from './pages/Contact'

import Logo from './assets/logos/azgh_logo.png'
import Aos from 'aos'

function App() {

useEffect(() =>{
  Aos.init({ duration: 1000 })

  const favicon = document.createElement("link")
  favicon.rel = "icon"
  favicon.href = Logo
  document.head.appendChild(favicon)
}, [])

  return(
    <>
      <Routes>
        <Route element={<RootLayout />}>

        <Route element={<BannerLayout />}>
          <Route path='/' element={<HomePage />} />
        </Route>

        <Route element={<DefaultRootLayout />}>
          <Route path='/about' element={<AboutPage />} />
          <Route path='/mission' element={<MissionPage />} />
          <Route path='/vision' element={<VisionPage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Route>

        <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
