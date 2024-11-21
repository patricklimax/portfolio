import { SectionPage } from '@/components/section';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { services } from '@/data/services';

export default function ServicesPage() {
	return (
		<SectionPage>
			<div className='grid w-full grid-cols-1 gap-6 sm:grid-cols-2 pb-6'>
				{services.map(service => {
					const ServiceIcon = service.icon;
					return (
						<Card key={service.name}>
							<CardContent>
								<div className='flex w-full items-center gap-4'>
									<CardTitle className='flex-3 flex w-full flex-col text-center text-lg font-medium'>
										{service.name}
									</CardTitle>

									<div className='flex flex-1 items-center justify-center'>
										<span className='w-fit place-items-start rounded-full border p-4 text-primary'>
											<ServiceIcon
												size={35}
												className='stroke-1'
											/>
										</span>
									</div>
								</div>

								<div className='flex flex-col items-center gap-2 text-sm font-light'>
									<p className=''>{service.description}</p>
									<p className='text-muted-foreground'>{service.moreInfo}</p>
								</div>
							</CardContent>
						</Card>
					);
				})}
			</div>
		</SectionPage>
	);
}
