import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-black flex flex-wrap justify-between items-center px-4 md:px-8 h-14'>
      <div className="logo font-bold text-4xl text-white">
        
        <span className='text-purple-800'> &lt;Pass</span>
        <span className='text-white'>OP</span> 
        <span className='text-purple-800'>/&gt;</span>
      </div>
      <ul className="flex flex-wrap gap-4 md:gap-8">
        <li>
          <a className="hover:font-bold text-lg md:text-2xl text-purple-800" href="/">Home</a>
        </li>
        <li>
          <a className="hover:font-bold text-lg md:text-2xl text-purple-800" href="#">About</a>
        </li>
        <li>
          <a className="hover:font-bold text-lg md:text-2xl text-purple-800" href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
