import Link from 'next/link';
import { ChevronRightIcon, HelpIcon } from '../icons';

export default function Card({
  title,
  price,
  orderNumber,
  nextPayDate,
}: {
  title: string;
  price: string;
  orderNumber?: string;
  nextPayDate?: string;
}) {
  return (
    <>
      {nextPayDate ? (
        <div className='flex flex-col bg-blue-primary shadow-sm rounded-lg overflow-hidden'>
          <div className='p-5 flex flex-col gap-4 text-black-100'>
            <div className='flex items-center gap-2'>
              <span>{title}</span>
              <HelpIcon className='w-4 h-4' />
            </div>
            <div className='flex items-center justify-between'>
              <span className='text-2xl tablet:text-[32px] font-medium tablet:leading-[38px]'>
                {price}
              </span>
              {orderNumber && (
                <Link href='#' className='flex items-center'>
                  <span className='font-medium underline text-base'>
                    {orderNumber} orders
                  </span>
                  <ChevronRightIcon className='w-6 h-6' />
                </Link>
              )}
            </div>
          </div>

          <div className='flex items-center justify-between text-black-95 bg-blue-hover rounded-lg py-2 px-6'>
            <span className='text-sm'>Next payout date:</span>
            <span className='text-sm font-medium'>{nextPayDate}</span>
          </div>
        </div>
      ) : (
        <div className='flex flex-col bg-black-100 shadow-sm rounded-lg overflow-hidden'>
          <div className='p-5 flex flex-col gap-4 text-black-30'>
            <div className='flex items-center gap-2'>
              <span>{title}</span>
              <HelpIcon className='w-4 h-4' />
            </div>
            <div className='flex items-center justify-between'>
              <span className='text-2xl tablet:text-[32px] font-medium tablet:leading-[38px] text-black-12'>
                {price}
              </span>
              {orderNumber && (
                <Link href='#' className='flex items-center text-blue-primary'>
                  <span className='font-medium underline text-base'>
                    {orderNumber} orders
                  </span>
                  <ChevronRightIcon className='w-6 h-6' />
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
