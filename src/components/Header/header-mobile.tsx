import { TextIcon } from 'lucide-react';
import { Logotipo } from '../logotipo';
import { MediaSocial } from '../media-social';
import { ToggleTheme } from '../theme-toggle';
import { Button } from '../ui/button';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTrigger
} from '../ui/sheet';
import { NavBarMobile } from './navbar-mobile';

export const HeaderMobile = () => {
	return (
		<div className='sm:hidden w-full h-full flex items-center justify-between px-2'>
			<Sheet>
				<SheetTrigger asChild>
					<Button
						size={'icon'}
						variant={'outline'}>
						<TextIcon />
					</Button>
				</SheetTrigger>
				<SheetContent
					side={'left'}
					className='flex flex-col'>
					<SheetHeader>
						<SheetClose asChild>
							<Logotipo />
						</SheetClose>
					</SheetHeader>
					<div className='h-[1px] w-full bg-border my-4' />
					<NavBarMobile />
					<SheetFooter className='h-20 mt-4 flex items-center justify-center'>
						<MediaSocial sizeMenuDesktop={true} />
					</SheetFooter>
				</SheetContent>
			</Sheet>
			<Logotipo />
			<ToggleTheme />
		</div>
	);
};
