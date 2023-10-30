import Link from 'next/link';
import GitHub from '@/components/icons/GitHub';
import Mail from '@/components/icons/Mail';

const icons = [
  {
    href: 'mailto:audrhkd1220@gmail.com',
    title: 'Email',
  },
  {
    href: 'https://github.com/audrhkd1220',
    title: 'GitHub',
    icon: '<div>icon</div>',
  },
];

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-center items-center border-t border-gray-100 p-10">
      <div className="flex">
        <Link
          href="https://github.com/audrhkd1220"
          target="_blank"
          className="mx-1"
        >
          <GitHub />
        </Link>
        <Link
          href="mailto:audrhkd1220@gmail.com"
          target="_blank"
          className="mx-1"
        >
          <Mail />
        </Link>
      </div>
      <div>
        <span>© {year} </span>
        <Link href="/">Muung blog</Link>
        <span> Powered by </span>
        <Link href="https://nextjs.org/">Next.js</Link>
      </div>
    </footer>
  );
};

export default Footer;
