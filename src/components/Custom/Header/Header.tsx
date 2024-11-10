// import Image from "next/image";

// const Header = () => {
//   return (
//     <header className="bg-white shadow-md px-4 py-3 flex items-center justify-between">
//       <div className="flex items-center ">
//         <Image src={logo} alt="msaffar creation" height={50} width={200} />
//       </div>

//       <nav className="hidden md:flex space-x-6 text-gray-700">
//         <a href="#work" className="hover:text-black">
//           My Work
//         </a>
//         <a href="#services" className="hover:text-black">
//           Services
//         </a>
//         <a href="#resume" className="hover:text-black">
//           Resume
//         </a>
//       </nav>

//       <div className="flex items-center space-x-4">
//         <div className="text-gray-700 flex items-center space-x-1">
//           <span>EN</span>
//           <span>|</span>
//           <span>BN</span>
//         </div>

//         <button className="btn btn-outline btn-sm">Start a new project</button>
//       </div>
//     </header>
//   );
// };

// export default Header;

// components/Header.js
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/assets/logo/black.png";

const navbarMenu = (
  <>
    <li>
      <Link href="#mywork">My Work</Link>
    </li>
    <li>
      <Link href="#services">Services</Link>
    </li>
    <li>
      <Link href="#resume">Resume</Link>
    </li>
  </>
);

export default function Header() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold"
            >
              {navbarMenu}
            </ul>
          </div>
          {/* Logo */}
          <div className="flex items-center">
            <Image src={logo} alt="Logo" width={150} height={40} />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-xl">
            {navbarMenu}
          </ul>
        </div>
        {/* Icons and Language Switcher */}
        <div className="flex items-center gap-4 ml-20">
          {/* Social Icons */}
          <Link href="https://t.me/yourhandle" target="_blank">
            <Image
              src="/assets/icons/telegram.png"
              alt="Logo"
              width={100}
              height={100}
            />
          </Link>
          <Link href="https://wa.me/yourphonenumber" target="_blank">
            <Image
              src="/assets/icons/whatsapp.png"
              alt="Logo"
              width={100}
              height={100}
            />
          </Link>
          <Link href="https://www.behance.net/yourhandle" target="_blank">
            <Image
              src="/assets/icons/behance.png"
              alt="Logo"
              width={100}
              height={100}
            />
          </Link>
          {/* Language Switcher */}
          <div className="flex items-center gap-1">
            <Link href="/en" className="font-semibold">
              EN
            </Link>
            <span>|</span>
            <Link href="/bn" className="font-semibold text-gray-500">
              BN
            </Link>
          </div>
        </div>
        <div className="navbar-end">
          {/* Start New Project Button */}
          <button className="btn btn-outline btn-sm flex">
            <Link href="/start-project" className="items-center justify-center">
              Start a new project <span>🚀</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
