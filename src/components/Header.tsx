import Link from 'next/link';
import Search from './Search';
import LightIcon from '@/components/icons/LightIcon';

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
              <h1 className="text-2xl font-bold">muung.blog</h1>
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
            <LightIcon />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
