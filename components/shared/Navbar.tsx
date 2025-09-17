// "use client"
// import Link from 'next/link';
// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0 flex items-center">
//             <span className="text-xl font-bold text-indigo-600">UniPlatform</span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link href="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
//             <Link href="/lost-found" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Lost & Found</Link>
//             <Link href="/hire-teacher" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Hire Teacher</Link>
//             <Link href="/buy-sell" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Buy & Sell</Link>
//             <Link href="/blogging" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Blogging</Link>
//             <button className="bg-transparent hover:bg-indigo-100 text-indigo-600 px-4 py-2 rounded-md text-sm font-medium">Login</button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
//             >
//               <svg
//                 className="h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {isMenuOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
//             <Link href="/" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
//             <Link href="/lost-found" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Lost & Found</Link>
//             <Link href="/hire-teacher" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Hire Teacher</Link>
//             <Link href="/buy-sell" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Buy & Sell</Link>
//             <Link href="/blogging" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Blogging</Link>
//             <button className="w-full bg-transparent hover:bg-indigo-100 text-indigo-600 px-4 py-2 rounded-md text-base font-medium mt-2">Login</button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-indigo-600">UniPlatform</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Home</Link>
            <Link href="/lost-found" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Lost & Found</Link>
            <Link href="/hire-teacher" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Hire Teacher</Link>
            <Link href="/buy-sell" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Buy & Sell</Link>
            <Link href="/blogging" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Blogging</Link>
            <Link href="/login" className="bg-transparent hover:bg-indigo-100 text-indigo-600 px-4 py-2 rounded-md text-sm font-medium">Login</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link href="/" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="/lost-found" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Lost & Found</Link>
            <Link href="/hire-teacher" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Hire Teacher</Link>
            <Link href="/buy-sell" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Buy & Sell</Link>
            <Link href="/blogging" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Blogging</Link>
            <Link href="/login" className="w-full bg-transparent hover:bg-indigo-100 text-indigo-600 px-4 py-2 rounded-md text-base font-medium mt-2">Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// https://github.com/Apollo-Level2-Web-Dev/L2-B2-Assignment-8-Full-stack/blob/main/1-Lost-and-Found-System.md
// https://github.com/sajid1545/FoundIt-client/tree/main/src
//https://github.com/sajid1545/FoundIt-server/tree/main