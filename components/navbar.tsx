import {
  AnalyticsIcon,
  AppearanceIcon,
  AudienceIcon,
  DeliveryIcon,
  DiscountsIcon,
  HomeIcon,
  MarketingIcon,
  OrdersIcon,
  PayoutsIcon,
  PluginsIcon,
  ProductsIcon,
} from './icons';
import NavbarItem from './navbarItem';

const navbarItems = [
  { href: '/home', icon: HomeIcon, label: 'Home' },
  { href: '/orders', icon: OrdersIcon, label: 'Orders' },
  { href: '/products', icon: ProductsIcon, label: 'Products' },
  { href: '/delivery', icon: DeliveryIcon, label: 'Delivery' },
  { href: '/marketing', icon: MarketingIcon, label: 'Marketing' },
  { href: '/analytics', icon: AnalyticsIcon, label: 'Analytics' },
  { href: '/payouts', icon: PayoutsIcon, label: 'Payouts' },
  { href: '/discounts', icon: DiscountsIcon, label: 'Discounts' },
  { href: '/audience', icon: AudienceIcon, label: 'Audience' },
  { href: '/appearance', icon: AppearanceIcon, label: 'Appearance' },
  { href: '/plugins', icon: PluginsIcon, label: 'Plugins' },
];

export default function Navbar() {
  return (
    <nav className='w-full'>
      <ul className='flex flex-col gap-1'>
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            icon={item.icon}
            label={item.label}
          />
        ))}
      </ul>
    </nav>
  );
}
