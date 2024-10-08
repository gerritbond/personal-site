import { HomeLayout } from './layouts/HomeLayout'
import { Nav } from './components/Nav'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AboutLayout } from './layouts/AboutLayout'
import { ContactLayout } from './layouts/ContactLayout'
import { BookshelfLayout } from './layouts/BookshelfLayout'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faLinkedin, faDiscord)

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col shadow-inset-gradient h-screen w-screen bg-slate-200 overflow-x-hidden overflow-y-auto">
        <Nav />
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/about" element={<AboutLayout />} />
          <Route path="/contact" element={<ContactLayout />} />
          <Route path="/bookshelf" element={<BookshelfLayout />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
