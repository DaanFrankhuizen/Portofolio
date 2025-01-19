import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900">Mijn Portfolio</h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/">
              <p className="text-gray-900 hover:text-blue-600">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p className="text-gray-900 hover:text-blue-600">Over mij</p>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <p className="text-gray-900 hover:text-blue-600">Contact</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
