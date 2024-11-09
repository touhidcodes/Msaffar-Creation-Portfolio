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

export default function Header() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <header className="flex justify-between items-center py-4 px-8 shadow-md bg-white">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={150} height={40} />
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-6 font-semibold">
          <Link href="#mywork">My Work</Link>
          <Link href="#services">Services</Link>
          <Link href="#resume">Resume</Link>
          <Link href="#resume">Download</Link>
          <Link href="#resume">Name</Link>
        </nav>

        {/* Icons and Language Switcher */}
        <div className="flex items-center gap-4">
          {/* Social Icons */}
          <Link href="https://t.me/yourhandle" target="_blank">
            <Image
              src="/assets/icons/telegram.png"
              alt="Logo"
              width={40}
              height={40}
            />
          </Link>
          <Link href="https://wa.me/yourphonenumber" target="_blank">
            <Image
              src="/assets/icons/whatsapp.png"
              alt="Logo"
              width={40}
              height={40}
            />
          </Link>
          <Link href="https://www.behance.net/yourhandle" target="_blank">
            <Image
              src="/assets/icons/behance.png"
              alt="Logo"
              width={40}
              height={40}
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

        {/* Start New Project Button */}
        <Link
          href="/start-project"
          className="btn btn-outline btn-sm flex items-center gap-2"
        >
          Start a new project <span>🚀</span>
        </Link>
      </header>

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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
}
