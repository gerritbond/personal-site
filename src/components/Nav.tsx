import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Nav = () => {
  return (
  <div className="sticky top-0 grid grid-cols-5 font-mono font-bold text-xl">
    <div className="flex flex-row justify-between items-left p-4 col-start-2">
        <span><Link to="/" className="hover:text-red-900">Home</Link></span>
        <span><Link to="/about" className="hover:text-red-900">About</Link></span>
        <span><Link to="/contact" className="hover:text-red-900 hidden">Contact</Link></span>
        <span><Link to="/bookshelf" className="hover:text-red-900 hidden">Bookshelf</Link></span>
    </div>
    <div className="flex flex-row justify-end items-right p-4 col-span-2">
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
  </div>);
};
