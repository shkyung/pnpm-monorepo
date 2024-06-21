import Link from 'next/link';
export const MainHeader = () => {
  return (
    <header className="bg-gray-800 py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold">
          <Link href="/">Logo</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition-colors duration-300">
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="text-gray-300 hover:text-white transition-colors duration-300">
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className="text-gray-300 hover:text-white transition-colors duration-300">
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white transition-colors duration-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
