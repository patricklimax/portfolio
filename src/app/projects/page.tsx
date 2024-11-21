'use client';
import { SectionPage } from '@/components/section';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel';
import { projects } from '@/data/projects';
import Autoplay from 'embla-carousel-autoplay';
import { MoveRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const recentProjects = projects
	.filter(project => project.class === 'principal')
	.sort((projectA, projectB) => projectA.id - projectB.id)
	.reverse();

export default function ProjectsPage() {
	return (
		<SectionPage>
			<Carousel
				className='w-full sm:w-[95%] mx-auto'
				plugins={[
					Autoplay({
						delay: 2000,
						stopOnMouseEnter: true
					})
				]}>
				<CarouselContent className='gap-1 p-1'>
					{recentProjects.map(project => (
						<CarouselItem
							key={project.id}
							className='md:basis-1/2'>
							<Card className='p-1'>
								<CardContent>
									<Image
										src={project.imgUrlCover}
										className='w-full rounded-md object-cover sm:h-[340px]'
										alt={project.name}
										width={702}
										height={450}
									/>

									<div className='flex w-full items-center justify-between'>
										<p className='ml-2 text-sm'>Projeto: {project.name}</p>
										<Link
											href={`/projects/${project.id}`}
											className='flex w-fit p-0'>
											<Button
												variant={'outline'}
												className='px-3 py-1 text-xs'
												size={'sm'}>
												Mais detalhes
											</Button>
										</Link>
									</div>
								</CardContent>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>

			<div className='flex items-center justify-end gap-4 mt-10 sm:mt-4 sm:pr-7 text-sm'>
				<p className='text-primary text-xs'>Veja todos os projetos</p>
				<MoveRightIcon
					strokeWidth={1}
					className='text-primary'
				/>
				<Link href={'/projects/all-projects'}>
					<Button
						size={'sm'}
						variant={'outline'}
						className='font-semibold text-xs'>
						+ Projetos
					</Button>
				</Link>
			</div>
		</SectionPage>
	);
}
