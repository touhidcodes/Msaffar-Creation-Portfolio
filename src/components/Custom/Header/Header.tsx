const Header = () => {
  return (
    <header className="bg-white shadow-md px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img src="/path/to/logo.png" alt="Logo" className="w-10 h-10" />
        <h1 className="text-lg font-bold">Mr. Saffar Creation</h1>
      </div>

      <nav className="hidden md:flex space-x-6 text-gray-700">
        <a href="#work" className="hover:text-black">
          My Work
        </a>
        <a href="#services" className="hover:text-black">
          Services
        </a>
        <a href="#resume" className="hover:text-black">
          Resume
        </a>
      </nav>

      <div className="flex items-center space-x-4">
        <div className="text-gray-700 flex items-center space-x-1">
          <span>EN</span>
          <span>|</span>
          <span>BN</span>
        </div>

        <button className="btn btn-outline btn-sm">Start a new project</button>
      </div>
    </header>
  );
};

export default Header;