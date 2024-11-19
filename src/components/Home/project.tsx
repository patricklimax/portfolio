import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { projects } from '@/data/projects';
import { MoveRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const projectOrderIDdesc = projects
	.sort((projectA, projectB) => projectA.id - projectB.id)
	.reverse();

const recentProject = projectOrderIDdesc[0];

export const LastProject = () => {
	return (
		<Card className='h-full'>
			<CardContent className='justify-between'>
				<CardTitle className='w-full text-start text-lg font-medium'>
					Veja meu último trabalho
				</CardTitle>

				<div className='h-[160px] md:h-[220px] w-full'>
					<Link href={`/projects/${recentProject.id}`}>
						<Image
							src={recentProject.imgUrlCover}
							width={248}
							height={100}
							alt={`Image do projeto ${recentProject.name}`}
							className='mx-auto h-full w-10/12 rounded-md border shadow-md shadow-background'
						/>
					</Link>
				</div>

				<div className='flex w-full items-center justify-between text-muted-foreground '>
					<p className='text-xs font-medium'>Meus Projetos</p>
					<Link
						href={'/projects'}
						className='group/item cursor-pointer text-primary'>
						<MoveRightIcon
							size={32}
							strokeWidth={0.7}
							className='group/edit group/edit stroke-1 transition-all duration-500 group-hover/item:translate-x-2 group-hover/item:text-foreground'
						/>
					</Link>
				</div>
			</CardContent>
		</Card>
	);
};
