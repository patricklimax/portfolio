import { BoxDiv } from './box-div';

const Footer = () => {
	return (
		<footer className='mx-auto h-6 w-full'>
			<BoxDiv className='h-full flex items-center justify-end px-4'>
				<p className='text-xs'>Todos os Direitos Reservados</p>
			</BoxDiv>
		</footer>
	);
};

export default Footer;
