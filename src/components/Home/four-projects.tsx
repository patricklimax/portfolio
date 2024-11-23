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
					className='flex-1 p-0 flex'>
					<CardContent className='gap-1 text-sm justify-center relative p-0'>
						<div className='w-full h-full p-2'>
							<Image
								src={project.imgUrlCover}
								alt='Imagem do Projeto'
								// fill
								width={780}
								height={500}
								quality={100}
								className='rounded-md w-full h-full'
							/>
						</div>
						<div className='absolute bottom-1.5 rounded-md p-2 bg-background w-[95%] flex items-center justify-between'>
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
