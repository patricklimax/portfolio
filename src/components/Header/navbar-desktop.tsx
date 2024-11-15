'use client';
import { linksMenuNavBar } from '@/data/menu-navbar';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';

type NavBarDesktopProps = {
	sizeMenuDesktop: boolean;
};

export const NavBarDesktop = ({ sizeMenuDesktop }: NavBarDesktopProps) => {
	const pathname = usePathname();
	return (
		<nav className={clsx('flex flex-col items-center gap-4 w-full py-4')}>
			{linksMenuNavBar.map(link => {
				const LinkIcon = link.icon;
				return (
					<Link
						className={clsx(
							'w-full flex items-center justify-center border-none'
						)}
						key={link.name}
						href={link.href}>
						<Button
							variant='outline'
							className={clsx(
								'flex items-center border-transparent gap-2 w-full justify-start font-bold text-foreground ',
								{
									'text-primary': pathname === link.href
								},
								{
									'h-9 w-9 p-0 flex items-center justify-center':
										!sizeMenuDesktop
								}
							)}>
							<LinkIcon className='w-4' />
							{sizeMenuDesktop && (
								<p className='transition-all duration-200'>{link.name}</p>
							)}
						</Button>
					</Link>
				);
			})}
		</nav>
	);
};
