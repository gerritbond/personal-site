import { HomeLayout } from './layouts/HomeLayout'
import { Nav } from './components/Nav'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AboutLayout } from './layouts/AboutLayout'
import { ContactLayout } from './layouts/ContactLayout'
import { BookshelfLayout } from './layouts/BookshelfLayout'
import { FooterNav } from './components/Nav'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { NavDrawerProvider } from './providers/NavDrawerProvider'
library.add(faGithub, faLinkedin, faDiscord, faBars, faArrowLeft)

function App() {
  return (
    <BrowserRouter>
      <NavDrawerProvider>
      <div className="flex flex-col shadow-inset-gradient h-screen w-screen bg-slate-200 overflow-x-hidden overflow-y-auto">
        <Nav />
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/about" element={<AboutLayout />} />
          <Route path="/contact" element={<ContactLayout />} />
          <Route path="/bookshelf" element={<BookshelfLayout />} />
        </Routes>
        <div id="footer" className='flex lg:hidden justify-center items-center'>
          <FooterNav />
        </div>
      </div>
      </NavDrawerProvider>
    </BrowserRouter>
  )
}

export default App
