import { BoxDiv } from '../box-div';

export const Header = () => {
	return (
		<header className='h-20 sm:h-screen'>
			<BoxDiv className='h-full'>
				<div className='sm:hidden'>menu mobile</div>
				<div className='hidden sm:flex md:w-72 sm:w-20'>menu desktop</div>
			</BoxDiv>
		</header>
	);
};
