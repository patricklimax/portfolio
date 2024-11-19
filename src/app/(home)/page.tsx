import { SectionPage } from '@/components/section';

export default function Home() {
	return (
		<SectionPage>
			<div className='mx-auto grid grid-cols-1 gap-6 sm:h-[calc(100vh-3rem)] md:grid-cols-12 md:grid-rows-12 pb-10 sm:pb-0'>
				<div className='md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-10'></div>

				<div className='md:col-start-4 md:col-end-10 md:row-start-1 md:row-end-10'></div>

				<div className='md:col-start-10 md:col-end-13 md:row-start-1 md:row-end-10 flex flex-col gap-4 overflow-y-auto [&::-webkit-scrollbar]:hidden'></div>

				<div className='md:col-start-1 md:col-end-7 md:row-start-10 md:row-end-13'></div>

				<div className='md:col-start-7 md:col-end-13 md:row-start-10 md:row-end-13'></div>
			</div>
		</SectionPage>
	);
}
