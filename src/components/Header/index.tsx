import { BoxDiv } from '../box-div';
import { HeaderDesktop } from './header-desktop';
import { HeaderMobile } from './header-mobile';

export const Header = () => {
	return (
		<header className='h-20 sm:h-screen'>
			<div className='h-full rounded-md shadow-sm'>
				<HeaderMobile />
				<HeaderDesktop />
			</div>
		</header>
	);
};
