'use client';

import { cn } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';

interface NavbarItemProps {
  href: string;
  icon: JSX.Element;
  label: string;
  setMobileMenuOpen?: Dispatch<SetStateAction<boolean>>;
}

export default function NavbarItem({
  href,
  icon,
  label,
  setMobileMenuOpen,
}: NavbarItemProps) {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === '/' && href === '/') ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  function handleClick() {
    router.push(href);
    if (setMobileMenuOpen !== undefined) setMobileMenuOpen(false);
  }

  return (
    <li
      onClick={handleClick}
      className={cn(
        'group flex items-center transition-all py-2 px-4 gap-3 rounded hover:bg-navbar-100 cursor-pointer',
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
    </li>
  );
}
