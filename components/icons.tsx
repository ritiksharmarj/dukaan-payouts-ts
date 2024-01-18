import * as React from 'react';
import { SVGProps } from 'react';

export const ChevronDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 25 24'
    fill='currentColor'
    {...props}
  >
    <path d='M3.91622 8.66628C4.42072 8.16177 5.21019 8.11591 5.76651 8.52869L5.92589 8.66628L12.5 15.2397L19.0741 8.66628C19.5786 8.16177 20.3681 8.11591 20.9244 8.52869L21.0838 8.66628C21.5883 9.17078 21.6342 9.96025 21.2214 10.5166L21.0838 10.6759L13.5048 18.2549C13.0003 18.7594 12.2109 18.8053 11.6545 18.3925L11.4952 18.2549L3.91622 10.6759C3.36126 10.121 3.36126 9.22123 3.91622 8.66628Z' />
  </svg>
);

export const WalletIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='currentColor'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3.00312 3.79727C2.42636 3.79727 1.80313 4.35527 1.80313 5.24727V18.7473C1.80313 19.6393 2.42636 20.1973 3.00312 20.1973H21.0031C21.5799 20.1973 22.2031 19.6393 22.2031 18.7473V15.8473H17.0032C14.8769 15.8473 13.1532 14.1236 13.1532 11.9973C13.1532 9.87097 14.8769 8.14727 17.0032 8.14727H22.2031V5.24727C22.2031 4.35527 21.5799 3.79727 21.0031 3.79727H3.00312ZM23.8031 8.14727V5.24727C23.8031 3.65398 22.6355 2.19727 21.0031 2.19727H3.00312C1.37075 2.19727 0.203125 3.65398 0.203125 5.24727V18.7473C0.203125 20.3405 1.37075 21.7973 3.00312 21.7973H21.0031C22.6355 21.7973 23.8031 20.3405 23.8031 18.7473V15.8473H23.8532V8.14727H23.8031ZM16.0032 11.9473C16.0032 11.4778 16.3837 11.0973 16.8532 11.0973H18.1532C18.6226 11.0973 19.0032 11.4778 19.0032 11.9473C19.0032 12.4167 18.6226 12.7973 18.1532 12.7973H16.8532C16.3837 12.7973 16.0032 12.4167 16.0032 11.9473ZM14.8532 11.9973C14.8532 10.8099 15.8158 9.84727 17.0032 9.84727H22.1532V14.1473H17.0032C15.8158 14.1473 14.8532 13.1847 14.8532 11.9973Z'
    />
  </svg>
);

export const MenuOpenIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
    viewBox='0 0 256 256'
    {...props}
  >
    <path d='M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z'></path>
  </svg>
);

export const HelpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 25 24'
    fill='currentColor'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.833 17.4526C13.833 18.1888 13.2362 18.7856 12.5 18.7856C11.7638 18.7856 11.1669 18.1888 11.1669 17.4526C11.1669 16.7163 11.7638 16.1195 12.5 16.1195C13.2362 16.1195 13.833 16.7163 13.833 17.4526Z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11.0035 5.84149C11.718 5.54552 12.5043 5.46808 13.2628 5.61896C14.0214 5.76985 14.7181 6.14228 15.265 6.68917C15.8119 7.23605 16.1843 7.93283 16.3352 8.69138C16.4861 9.44993 16.4087 10.2362 16.1127 10.9507C15.8167 11.6653 15.3155 12.276 14.6724 12.7057C14.254 12.9853 13.7877 13.1801 13.2999 13.282V13.4534C13.2999 13.8952 12.9417 14.2534 12.4999 14.2534C12.0581 14.2534 11.6999 13.8952 11.6999 13.4534V12.5647C11.6999 12.3525 11.7842 12.1491 11.9342 11.999C12.0843 11.849 12.2877 11.7647 12.4999 11.7647C12.9569 11.7647 13.4036 11.6292 13.7835 11.3753C14.1635 11.1215 14.4596 10.7606 14.6345 10.3384C14.8094 9.91626 14.8551 9.45171 14.766 9.00352C14.6768 8.55534 14.4568 8.14366 14.1337 7.82054C13.8105 7.49742 13.3988 7.27737 12.9507 7.18822C12.5025 7.09907 12.0379 7.14482 11.6158 7.3197C11.1936 7.49457 10.8327 7.7907 10.5789 8.17066C10.325 8.55061 10.1895 8.99731 10.1895 9.45427C10.1895 9.8961 9.83131 10.2543 9.38948 10.2543C8.94765 10.2543 8.58948 9.8961 8.58948 9.45427C8.58948 8.68086 8.81882 7.92481 9.24851 7.28174C9.67819 6.63867 10.2889 6.13746 11.0035 5.84149Z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12.5 2.80004C7.41893 2.80004 3.29995 6.91902 3.29995 12C3.29995 17.0811 7.41893 21.2 12.5 21.2C17.581 21.2 21.7 17.0811 21.7 12C21.7 6.91902 17.581 2.80004 12.5 2.80004ZM1.69995 12C1.69995 6.03537 6.53528 1.20004 12.5 1.20004C18.4646 1.20004 23.2999 6.03537 23.2999 12C23.2999 17.9647 18.4646 22.8 12.5 22.8C6.53528 22.8 1.69995 17.9647 1.69995 12Z'
    />
  </svg>
);

export const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 25 24'
    fill='currentColor'
    {...props}
  >
    <g clipPath='url(#clip0_28_2970)'>
      <path d='M10.7 18.0452C6.3992 18.0452 2.9 14.5372 2.9 10.2256C2.9 5.91405 6.3992 2.40608 10.7 2.40608C15.0008 2.40608 18.5 5.91405 18.5 10.2256C18.5 14.5372 15.0008 18.0452 10.7 18.0452ZM18.9188 16.2563C20.1584 14.5625 20.9 12.4825 20.9 10.2256C20.9 4.58713 16.3244 6.10352e-05 10.7 6.10352e-05C5.0756 6.10352e-05 0.5 4.58713 0.5 10.2256C0.5 15.8641 5.0756 20.4512 10.7 20.4512C13.2092 20.4512 15.5072 19.5333 17.2844 18.0199L21.5048 22.2509C21.7388 22.4855 22.046 22.6034 22.3532 22.6034C22.6604 22.6034 22.9676 22.4855 23.2016 22.2509C23.6708 21.7805 23.6708 21.0202 23.2016 20.5498L18.9188 16.2563Z' />
    </g>
    <defs>
      <clipPath id='clip0_28_2970'>
        <rect
          width='24'
          height='24'
          fill='currentColor'
          transform='translate(0.5 6.10352e-05)'
        />
      </clipPath>
    </defs>
  </svg>
);

export const FeedbackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 25 24'
    fill='currentColor'
    {...props}
  >
    <path d='M21.3421 1.52498L3.17158 5.05152C2.48632 5.17397 2 5.8352 2 6.59439V14.6271C2 15.3863 2.48632 16.0475 3.17158 16.1699L5.02842 16.5373C5.78 17.9087 7.19474 20.2842 9.09579 22.2189C9.73684 22.8802 10.7979 22.2924 10.6653 21.3128C10.4884 20.0149 10.5326 18.6189 10.5989 17.6393L21.3421 19.7455C22.2042 19.9169 23 19.1822 23 18.2026V3.06784C23 2.08824 22.2042 1.35355 21.3421 1.52498ZM8.78632 11.6148C8.78632 11.8842 8.58737 12.1046 8.34421 12.1046H6.53158C6.28842 12.1046 6.08947 11.8842 6.08947 11.6148V9.60665C6.08947 9.33726 6.28842 9.11685 6.53158 9.11685H8.34421C8.58737 9.11685 8.78632 9.33726 8.78632 9.60665V11.6148ZM13.8484 11.6148C13.8484 11.8842 13.6495 12.1046 13.4063 12.1046H11.5937C11.3505 12.1046 11.1516 11.8842 11.1516 11.6148V9.60665C11.1516 9.33726 11.3505 9.11685 11.5937 9.11685H13.4063C13.6495 9.11685 13.8484 9.33726 13.8484 9.60665V11.6148ZM18.9326 11.6148C18.9326 11.8842 18.7337 12.1046 18.4905 12.1046H16.6779C16.4347 12.1046 16.2358 11.8842 16.2358 11.6148V9.60665C16.2358 9.33726 16.4347 9.11685 16.6779 9.11685H18.4684C18.7116 9.11685 18.9105 9.33726 18.9105 9.60665V11.6148H18.9326Z' />
  </svg>
);

export const SortArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 25 24'
    fill='currentColor'
    {...props}
  >
    <path d='M13.6018 18.8073C13.0079 19.4502 11.992 19.4502 11.3981 18.8073L4.43352 11.2679C3.54605 10.3072 4.22745 8.75005 5.53535 8.75005L19.4646 8.75005C20.7725 8.75005 21.4539 10.3072 20.5664 11.2679L13.6018 18.8073Z' />
  </svg>
);

export const SortIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 16'
    fill='currentColor'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1.62496 9.93424C1.83324 9.72596 2.17093 9.72596 2.37921 9.93424L4.64295 12.198L6.90669 9.93424C7.11497 9.72596 7.45266 9.72596 7.66094 9.93424C7.86922 10.1425 7.86922 10.4802 7.66094 10.6885L5.02007 13.3294C4.81179 13.5376 4.47411 13.5376 4.26583 13.3294L1.62496 10.6885C1.41668 10.4802 1.41668 10.1425 1.62496 9.93424Z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4.6429 2.51564C4.93746 2.51564 5.17624 2.75442 5.17624 3.04897L5.17624 12.9522C5.17624 13.2468 4.93746 13.4856 4.6429 13.4856C4.34835 13.4856 4.10957 13.2468 4.10957 12.9522L4.10957 3.04897C4.10957 2.75442 4.34835 2.51564 4.6429 2.51564Z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M14.3792 6.06695C14.1709 6.27523 13.8332 6.27523 13.6249 6.06695L11.3612 3.8032L9.09745 6.06695C8.88917 6.27523 8.55149 6.27523 8.34321 6.06695C8.13493 5.85867 8.13493 5.52098 8.34321 5.3127L10.9841 2.67183C11.1924 2.46356 11.53 2.46356 11.7383 2.67183L14.3792 5.3127C14.5875 5.52098 14.5875 5.85867 14.3792 6.06695Z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11.3612 13.4855C11.0667 13.4855 10.8279 13.2468 10.8279 12.9522L10.8279 3.04896C10.8279 2.75441 11.0667 2.51563 11.3612 2.51563C11.6558 2.51563 11.8946 2.75441 11.8946 3.04896L11.8946 12.9522C11.8946 13.2468 11.6558 13.4855 11.3612 13.4855Z'
    />
  </svg>
);

export const DownloadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='currentColor'
    {...props}
  >
    <path d='M17.9993 11.9414C18.371 11.9414 18.6811 12.2102 18.7435 12.5968L18.75 12.7L18.7495 16.2321C18.7495 17.5585 17.7164 18.655 16.3813 18.7448L16.2153 18.75L3.77794 18.7499C2.44615 18.7499 1.34529 17.7208 1.25525 16.391L1.25 16.2258V12.6863C1.25 12.2749 1.58596 11.9414 2.00027 11.9414C2.37194 11.9414 2.68197 12.2102 2.74442 12.5968L2.75092 12.7L2.75044 16.2321C2.75044 16.7555 3.14596 17.2013 3.65248 17.2534L3.76695 17.2599L16.2217 17.2602C16.7449 17.2602 17.1902 16.8642 17.2423 16.3577L17.2489 16.2429L17.2492 12.6863C17.2492 12.2749 17.585 11.9414 17.9993 11.9414ZM10.0121 1.25C10.3715 1.25038 10.6815 1.51921 10.744 1.90576L10.7505 2.00892L10.7512 10.8297L13.9124 7.67494C14.1433 7.44469 14.4923 7.39342 14.7961 7.54761L14.9083 7.61495L14.9846 7.68297C15.2334 7.92976 15.2646 8.33058 15.0409 8.65049L14.9652 8.73721L10.5142 13.1745L10.4327 13.2409L10.3271 13.3035L10.2368 13.3399L10.155 13.3617L10.0754 13.374L10.0133 13.3765L9.89007 13.3697L9.78548 13.3471L9.70291 13.3166L9.6007 13.2643L9.54241 13.2224L9.4569 13.1479L5.02399 8.726C4.73169 8.43447 4.73275 7.96287 5.02636 7.67264C5.28648 7.41551 5.69029 7.38633 6.01149 7.60986L6.09848 7.68534L9.25064 10.8296L9.24964 1.9952C9.24964 1.61868 9.53272 1.30251 9.90546 1.25619L10.0121 1.25Z' />
  </svg>
);

export const ChevronRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 25 24'
    fill='currentColor'
    {...props}
  >
    <path d='M7.91622 20.5838C7.41171 20.0793 7.36585 19.2899 7.77862 18.7336L7.91622 18.5742L14.4897 12.0001L7.91622 5.42595C7.41171 4.92144 7.36585 4.13198 7.77862 3.57566L7.91622 3.41628C8.42072 2.91177 9.21019 2.86591 9.76651 3.27868L9.92589 3.41628L17.5048 10.9952C18.0093 11.4997 18.0552 12.2892 17.6424 12.8455L17.5048 13.0049L9.92589 20.5838C9.37093 21.1388 8.47117 21.1388 7.91622 20.5838Z' />
  </svg>
);
