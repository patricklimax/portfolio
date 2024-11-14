import { BoxDiv } from '../box-div';
import { HeaderMobile } from './header-mobile';

export const Header = () => {
	return (
		<header className='h-20 sm:h-screen'>
			<BoxDiv className='h-full'>
				<HeaderMobile />
				<div className='hidden sm:flex md:w-72 sm:w-20'>menu desktop</div>
			</BoxDiv>
		</header>
	);
};
