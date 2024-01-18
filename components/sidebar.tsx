import Image from 'next/image';
import Link from 'next/link';
import { ChevronDownIcon, WalletIcon } from './icons';
import Navbar from './navbar';

export default function Sidebar() {
  return (
    <>
      <div className='row-span-full bg-navbar-secondary hidden tablet:flex flex-col items-center py-4 px-[10px] gap-4 text-black-100'>
        <div className='flex flex-col gap-6 items-center w-full grow'>
          {/* company */}
          <div className='flex gap-3 items-center w-[192px]'>
            <div className='w-10 h-10 rounded bg-black-100 overflow-hidden'>
              <Image
                src='/company-icon.jpg'
                alt='company icon'
                width={40}
                height={40}
              />
            </div>
            <div className='flex flex-col gap-1 grow items-start'>
              <span className='text-[15px] font-medium leading-[22px]'>
                Nishyan
              </span>
              <Link
                href='#'
                className='text-[13px] leading-4 underline opacity-80 hover:opacity-100 transition-all'
              >
                Visit store
              </Link>
            </div>
            <Link href='#'>
              <ChevronDownIcon className='w-5 h-5' />
            </Link>
          </div>

          {/* navigation */}
          <Navbar />
        </div>

        <Link
          href='#'
          className='w-[192px] py-[6px] px-3 rounded flex items-center gap-[10px] bg-navbar-200'
        >
          <div className='flex items-center justify-center p-[6px] rounded bg-navbar-100'>
            <WalletIcon className='w-6 h-6 text-black-100' />
          </div>
          <div className='flex flex-col gap-[2px]'>
            <span className='text-[13px] leading-4 opacity-80'>
              Available credits
            </span>
            <span className='text-base font-medium leading-6'>222.10</span>
          </div>
        </Link>
      </div>
    </>
  );
}
