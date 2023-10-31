import Link from 'next/link';
import GitHubIcon from '@/components/icons/GitHubIcon';
import MailIcon from '@/components/icons/MailIcon';

const icons = [
  {
    href: 'mailto:audrhkd1220@gmail.com',
    title: 'Email',
  },
  {
    href: 'https://github.com/audrhkd1220',
    title: 'GitHub',
  },
];

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="w-full flex gap-1 flex-col justify-center items-center border-t border-gray-100 p-10">
      <div className="flex gap-1">
        <Link
          href="https://github.com/audrhkd1220"
          target="_blank"
          className="mx-1"
        >
          <GitHubIcon />
        </Link>
        <Link
          href="mailto:audrhkd1220@gmail.com"
          target="_blank"
          className="mx-1"
        >
          <MailIcon />
        </Link>
      </div>
      <div className="text-gray-500">
        <span>© {year} </span>
        <Link href="/" className="hover:text-gray-900 hover:underline">
          Muung blog
        </Link>
        <span> Powered by </span>
        <Link
          href="https://nextjs.org/"
          className="hover:text-gray-900 hover:underline"
        >
          Next.js
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
