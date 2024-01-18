'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarItemProps {
  href: string;
  icon: JSX.Element;
  label: string;
}

export default function NavbarItem({ href, icon, label }: NavbarItemProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={cn(
          'group flex items-center transition-all py-2 px-4 gap-3 rounded hover:bg-navbar-100',
          isActive && 'bg-navbar-100'
        )}
      >
        <div
          className={cn(
            'w-5 h-5 opacity-80 group-hover:opacity-100 transition-all',
            isActive && 'opacity-100'
          )}
        >
          {icon}
        </div>
        <span
          className={cn(
            'text-sm font-medium opacity-80 group-hover:opacity-100 transition-all',
            isActive && 'opacity-100'
          )}
        >
          {label}
        </span>
      </Link>
    </li>
  );
}
