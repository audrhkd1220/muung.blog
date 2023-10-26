import Link from 'next/link';
import Search from './Search';

const headerMenuItems = [
  { href: 'blog', title: 'Blog' },
  { href: 'tags', title: 'Tags' },
  { href: 'about', title: 'About' },
];

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between fixed inset-0 backdrop-blur-sm bg-white/80 h-[70px] border-b border-gray-100 z-10">
      <div className="flex justify-between w-full max-w-6xl mx-auto flex items-center px-5">
        <div className="flex items-center mb-2">
          <div>
            <Link href="/">
              <h1 className="text-2xl">muung.blog</h1>
            </Link>
          </div>
        </div>
        <nav className="flex grow justify-end">
          <Search />
          <div className="flex">
            {headerMenuItems.map((menu) => (
              <Link key={menu.title} href={menu.href} className="px-3 py-2">
                {menu.title}
              </Link>
            ))}
          </div>
          <button className="p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-[#FFD400]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
