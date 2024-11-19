import { Card, CardContent } from '@/components/ui/card';
import { projects } from '@/data/projects';
import { MoveRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const FourProjects = () => {
	const projectsFour = projects
		.filter(project => project.class === 'principal')
		.sort((projectA, projectB) => projectB.id - projectA.id)
		.slice(1, 4);

	return (
		<>
			{projectsFour.map(project => (
				<Card
					key={project.id}
					className='flex-1'>
					<CardContent className='gap-1 text-sm justify-center relative p-0'>
						<div className='h-48 md:h-28 w-full '>
							<Image
								src={project.imgUrlCover}
								alt='Imagem do Projeto'
								width={150}
								height={90}
								className='h-full w-full rounded-md'
							/>
						</div>
						<div className='absolute bottom-1 rounded-md p-2 bg-background w-[97%] flex items-center justify-between'>
							<p className='text-xs font-semibold'>{project.name}</p>
							<Link
								className='text-xs font-semibold flex gap-1 hover:text-primary'
								href={`/projects/${project.id}`}>
								Ver
								<MoveRightIcon
									size={16}
									className='stroke-2'
								/>
							</Link>
						</div>
					</CardContent>
				</Card>
			))}
		</>
	);
};
