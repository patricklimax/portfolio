'use client';
import { linksMenuNavBar } from '@/data/menu-navbar';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import { SheetClose } from '../ui/sheet';

export const NavBar = () => {
	const pathname = usePathname();
	return (
		<nav className={clsx('flex flex-col gap-4 flex-1 ')}>
			{linksMenuNavBar.map(link => {
				const LinkIcon = link.icon;
				return (
					<Link
						className={clsx(
							'w-full flex items-center justify-center border-none'
						)}
						key={link.name}
						href={link.href}>
						<SheetClose asChild>
							<Button
								variant='outline'
								className={clsx(
									'flex items-center border-transparent gap-2 w-full justify-start font-bold text-foreground ',
									{
										'border-primary': pathname === link.href
									}
								)}>
								<LinkIcon className='w-4' />

								<p className='transition-all duration-200'>{link.name}</p>
							</Button>
						</SheetClose>
					</Link>
				);
			})}
		</nav>
	);
};
