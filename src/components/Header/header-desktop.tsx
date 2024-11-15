'use client';
import clsx from 'clsx';
import { PanelsTopLeftIcon } from 'lucide-react';
import { useState } from 'react';
import { Logotipo } from '../logotipo';
import { MediaSocial } from '../media-social';
import { ToggleTheme } from '../theme-toggle';
import { Button } from '../ui/button';
import { NavBarDesktop } from './navbar-desktop';
import { TitleDev } from './title-dev';

export const HeaderDesktop = () => {
	const [sizeHeaderMinus, setSizeHeaderMinus] = useState<boolean>(false);

	const handleDecreaseSizeHeaderButton = () => {
		setSizeHeaderMinus(!sizeHeaderMinus);
		console.log('chamou o size');
	};
	return (
		<div
			className={clsx(
				'hidden sm:flex flex-col gap-4 items-center w-20 sm:w-72 relative transition-all duration-300 h-full px-6',
				{
					'md:w-24': sizeHeaderMinus
				}
			)}>
			<Button
				variant={'outline'}
				onClick={handleDecreaseSizeHeaderButton}
				size='icon'
				className='border-none absolute top-2 left-1/2 -translate-x-1/2'>
				<PanelsTopLeftIcon size={20} />
			</Button>

			<div className='mt-16'>
				<Logotipo />
			</div>

			{!sizeHeaderMinus && <TitleDev />}

			<div className='w-full flex-1'>
				<NavBarDesktop sizeMenuDesktop={!sizeHeaderMinus} />
			</div>

			<div
				className={clsx('flex items-center gap-2 py-4', {
					'flex-col-reverse': sizeHeaderMinus
				})}>
				<ToggleTheme />
				<MediaSocial sizeMenuDesktop={!sizeHeaderMinus} />
			</div>
		</div>
	);
};
