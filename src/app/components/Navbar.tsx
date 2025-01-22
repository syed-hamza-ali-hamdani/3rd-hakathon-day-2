import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <header className="bg-[#F5F5F5] border-b font-[Helvetica Neue] flex justify-between items-center px-10 py-2">
        {/* Logo Section */}
        <div className="flex items-center">
          <svg width="40" height="36" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              className="w-[50px]"
              d="M11.05 1.14V1.08C11.05 0.8 11.14 0.55 11.32 0.33C11.5 0.11 11.73 0 12.01 0C12.29 0 12.54 0.0900001 12.76 0.27C12.98 0.45 13.1 0.69 13.12 0.99C13.14 1.29 13.05 1.54 12.85 1.74C12.65 1.94 12.41 2.04 12.13 2.04L11.95 2.1L12.01 2.19L11.95 2.52L11.83 3.48C11.87 3.52 11.89 3.56 11.89 3.6L11.77 4.2C11.73 4.28 11.69 4.34 11.65 4.38L11.59 4.62C11.51 4.94 11.44 5.2 11.38 5.4C11.32 5.6 11.27 5.76 11.23 5.88V6C11.19 6.2 11.16 6.36 11.14 6.48C11.12 6.6 11.05 6.8 10.93 7.08C10.85 7.24 10.85 7.5 10.93 7.86L10.99 7.92C10.99 8.04 11.04 8.18 11.14 8.34C11.24 8.5 11.29 8.64 11.29 8.76C11.33 9.56 11.27 10.24 11.11 10.8L11.23 11.16C11.71 11.4 11.85 11.66 11.65 11.94L11.95 12.06C12.43 12.3 12.77 12.51 12.97 12.69C13.17 12.87 13.37 13.06 13.57 13.26C13.73 13.3 13.85 13.36 13.93 13.44L14.11 13.5C14.95 14.06 15.79 14.74 16.63 15.54L16.87 15.72V15.78L16.81 15.9L16.99 16.02H17.05C17.17 16.1 17.25 16.14 17.29 16.14H17.35C17.39 16.14 17.43 16.12 17.47 16.08L17.59 16.02C17.67 15.94 17.75 15.88 17.83 15.84H18.07C18.11 15.84 18.11 15.86 18.07 15.9L17.83 16.02L17.53 16.38H17.95L18.37 16.44C18.49 16.4 18.59 16.36 18.67 16.32L18.97 16.14C19.09 16.1 19..."
            />
          </svg>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm sm:text-base md:text-lg text-black">Home</Link>
          <Link href="./product-details" className="text-sm sm:text-base md:text-lg text-black">About</Link>
          <Link href="./all-product" className="text-sm sm:text-base md:text-lg text-black">Services</Link>
          <Link href="./contact-us" className="text-sm sm:text-base md:text-lg text-black">Contact</Link>
        </nav>

        {/* Mobile Menu (Hamburger) */}
        <nav className="md:hidden flex items-center space-x-4">
          <div className="text-black">☰</div>
        </nav>

        {/* Icons Section */}
        <div className="flex items-center space-x-4">
          <div className="text-black">❤️</div>
          <div className="text-black">🛒</div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
