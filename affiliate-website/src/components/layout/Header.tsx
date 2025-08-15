import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">
          <Link href="/">AffiliateSite</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/reviews" className="hover:text-gray-300">
              Reviews
            </Link>
          </li>
          <li>
            <Link href="/comparisons" className="hover:text-gray-300">
              Comparisons
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
