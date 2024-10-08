import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react';
import { NavDrawerContext } from '../providers/NavDrawerProvider';

export const FooterNav = () => {
  return <div className="flex flex-row justify-center items-left p-4 col-start-2">
        <a href="https://github.com/gerritbond" target="_blank" rel="noopener noreferrer" className="mx-3 hover:text-red-900">
          <FontAwesomeIcon icon={['fab', 'github']} size="xl" />
        </a>
        <a href="https://linkedin.com/in/gerrit-bond" target="_blank" rel="noopener noreferrer" className="mx-3 hover:text-red-900">
          <FontAwesomeIcon icon={['fab', 'linkedin']} size="xl" />
        </a>
        <a href="https://discord.gg/gerritbond" target="_blank" rel="noopener noreferrer" className="mx-3 hover:text-red-900">
          <FontAwesomeIcon icon={['fab', 'discord']} size="xl" />
      </a>  
  </div>
}

export const Nav = () => {
  const { state: { isNavOpen }, actions: { toggle } } = useContext(NavDrawerContext);

  const toggleMenu = () => {
    console.log('toggleMenu', isNavOpen);
    toggle();
  };

  return (
  <div className="sticky grid grid-cols-1 lg:grid-cols-5 font-mono font-bold text-xl">
    <div className="hidden lg:flex flex-row justify-between items-left p-4 col-start-2">
        <span><Link to="/" className="hover:text-red-900">Home</Link></span>
        <span><Link to="/about" className="hover:text-red-900">About</Link></span>
        <span><Link to="/contact" className="hover:text-red-900 hidden">Contact</Link></span>
        <span><Link to="/bookshelf" className="hover:text-red-900 hidden">Bookshelf</Link></span>
    </div>
    <div className="hidden lg:flex flex-row justify-end items-right p-4 col-span-2">
        <a href="https://github.com/gerritbond" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-red-900">
          <FontAwesomeIcon icon={['fab', 'github']} />
        </a>
        <a href="https://linkedin.com/in/gerrit-bond" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-red-900">
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </a>
        <a href="https://discord.gg/gerritbond" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-red-900">
          <FontAwesomeIcon icon={['fab', 'discord']} />
        </a>  
    </div>
    <div className="flex lg:hidden flex-row justify-start items-left p-4 mr-2 col-span-2 ">
      <FontAwesomeIcon icon={['fas', 'bars']} size="xl" className="p-1 hover:text-red-900" onClick={toggleMenu} />
    </div>
    {isNavOpen && (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex">
        <div className="bg-slate-200 p-4 rounded-r-sm top-0 left-0 w-3/5 h-full">
          <FontAwesomeIcon icon={['fas', 'arrow-left']} size="lg" className="p-1 hover:text-red-900" onClick={toggleMenu} />
          <ul className="space-y-2 ml-8">
            <li><Link to="/" className="hover:text-red-900 my-5" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" className="hover:text-red-900 my-5" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/contact" className="hover:text-red-900 my-5 hidden" onClick={toggleMenu}>Contact</Link></li>
            <li><Link to="/bookshelf" className="hover:text-red-900 my-5 hidden" onClick={toggleMenu}>Bookshelf</Link></li>
          </ul>
        </div>
      </div>
    )}
  </div>
  );
};
