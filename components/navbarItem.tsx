import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SVGProps } from 'react';

interface NavbarItemProps {
  href: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  label: string;
}

export default function NavbarItem({
  href,
  icon: Icon,
  label,
}: NavbarItemProps) {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={href}
        className='group flex items-center transition-all py-2 px-4 gap-3 rounded hover:bg-navbar-100'
      >
        <Icon className='w-5 h-5 opacity-80 group-hover:opacity-100 transition-all' />
        <span className='text-sm font-medium opacity-80 group-hover:opacity-100 transition-all'>
          {label}
        </span>
      </Link>
    </li>
  );
}
