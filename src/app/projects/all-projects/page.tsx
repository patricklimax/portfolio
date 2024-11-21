import { SectionPage } from '@/components/section';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';

const recentProjects = projects
	.sort((projectA, projectB) => projectA.id - projectB.id)
	.reverse();
export default function AllProjectsPage() {
	return (
		<SectionPage>
			<div className='grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pb-6'>
				{recentProjects.map(project => (
					<div
						key={project.id}
						className='group/item relative w-full rounded-md border sm:h-auto'>
						<div className='group/edit absolute bottom-0 hidden h-0 w-full rounded-md bg-gradient-to-b from-background to-background/75 transition-all duration-500 group-hover/item:h-full sm:block ' />

						<Image
							src={project.imgUrlCover}
							className='w-full rounded-md object-cover sm:h-[220px]'
							alt={project.name}
							width={702}
							height={450}
						/>

						<div className='group/edit z-40 flex sm:h-full flex-col rounded-md p-4 transition-all duration-700 group-hover/item:opacity-100 sm:absolute sm:bottom-0 sm:justify-between sm:p-4 sm:opacity-0 bg-gradient-to-br from-primary/5 via-background/75 to-primary/10'>
							<p className='text-lg font-semibold text-primary sm:text-2xl'>
								{project.name}
							</p>

							<p className='mb:mt-0 mt-2 rounded-md text-xs font-medium shadow-md sm:px-6'>
								{project.descriptionCover}
							</p>

							<Link
								href={`/projects/${project.id}`}
								className='mt-2 flex w-fit self-end p-0'>
								<Button
									variant={'outline'}
									className='px-2 py-1 text-xs'
									size={'sm'}>
									Mais detalhes
								</Button>
							</Link>
						</div>
					</div>
				))}
			</div>
		</SectionPage>
	);
}
