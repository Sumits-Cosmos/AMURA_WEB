import React from 'react';
import { Home, User, Calendar, Rocket,   } from 'lucide-react';
import About from '../../pages/About';

// interface NavbarProps {
//   userName?: string;
// }

export const Navbar = ({ userName = 'User' }) => {
  const userInitial = userName.charAt(0).toUpperCase();

  return (
    <div className='flex flex-col max-h-fit'>
    <nav className="bg-white shadow-lg w-full">
    <div className="  px-4 sm:px-6 lg:px-8 ">
      <div className="flex justify-between h-16 items-center">
        
        {/* Logo and Brand */}
        <div className="flex items-center ">
          <Rocket className="h-8 w-8 text-indigo-600" />
          <span className="ml-2 text-xl font-bold text-gray-800">AMURA</span>
        </div>
  
        {/* Navigation Links */}
        <div className="flex space-x-8 gap-7">
          <a href="/about" className="flex items-center text-gray-700 hover:text-indigo-600 transition">
            <Home className="h-5 w-5 mr-1" />
            <span>About</span>
          </a>
          
          <a href="/events" className="flex items-center pl-3 text-gray-700 hover:text-indigo-600 transition">
            <Calendar className="h-5 w-5 mr-1" />
            <span>Events</span>
          </a>
       
  
        {/* Profile Section */}
        <a href="/profile" className="flex items-center ">
          <div className="h-8 w-8 flex items-center justify-center rounded-full bg-indigo-600 text-white">
            <span className="text-sm font-medium">{userInitial}</span>
          </div> 
        </a>
        </div>
  
      </div>
    </div>
  </nav>
  </div>
  
)}

      