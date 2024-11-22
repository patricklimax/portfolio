import { SectionPage } from '@/components/section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { projects } from '@/data/projects';
import { ChevronsRightIcon, MoveLeftIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProfessionalDetailsPageProps {
	params: {
		id?: string;
	};
}

const ProjectDetailsPage = ({ params }: ProfessionalDetailsPageProps) => {
	if (!params) {
		//TODO: redirect to homepage
		return null;
	}

	const projeto = projects.filter(project => project.id === Number(params.id));
	const projetoItem = projeto[0];
	const funcs = projetoItem.functionalities;
	const techs = projetoItem.technologies;

	if (!projeto) {
		//TODO: redirect to homepage
		return null;
	}

	return (
		<SectionPage>
			<h2 className='text-2xl font-semibold mb-6'>
				<span className='text-primary'>const</span> #{projetoItem.name}
			</h2>

			<div className='w-full pb-6'>
				<div className='mb-6 flex w-full flex-col items-stretch gap-6 sm:flex-row'>
					<div className='w-full rounded-xl border sm:w-1/2'>
						<Image
							src={projetoItem.imgUrlCover}
							alt={projetoItem.name}
							width={702}
							height={450}
							className='h-[180px] w-full rounded-xl object-cover sm:h-[304px]'
						/>
					</div>

					<div className='flex w-full flex-col justify-between gap-3 rounded-xl p-6 sm:w-1/2 border-none bg-gradient-to-br from-primary/5 via-background/75 to-primary/10'>
						<p className='text-xl font-semibold text-primary sm:text-3xl'>
							<span className='text-foreground'>#</span>
							{projetoItem.name}
						</p>

						<p className='text-xs font-light text-muted-foreground'>
							{projetoItem.descriptionProject}
						</p>

						<div className='mt-2 flex items-center gap-10 self-end'>
							<Link
								target='_blank'
								rel='noopener noreferrer'
								href={projetoItem.onlineURL ? projetoItem.onlineURL : ''}>
								<Button
									disabled={!projetoItem.onlineURL && true}
									variant={'outline'}
									size={'sm'}
									className='text-xs'>
									Ver Online
								</Button>
							</Link>
							<Link
								target='_blank'
								rel='noopener noreferrer'
								href={projetoItem.githubURL}>
								<Button
									disabled={!projetoItem.githubURL && true}
									variant={'outline'}
									size={'sm'}
									className='text-xs'>
									Repositório
								</Button>
							</Link>
						</div>
					</div>
				</div>

				<div className='flex flex-col items-stretch gap-6 sm:flex-row'>
					<Card className='w-full sm:w-1/2'>
						<CardContent>
							<CardTitle className='w-full text-start text-lg font-medium uppercase text-primary'>
								Funcionalidades
							</CardTitle>

							<Image
								src={projetoItem.imgUrlFunc}
								alt={projetoItem.name}
								width={702}
								height={450}
								className='h-[180px] w-[492px] rounded-md object-cover sm:h-[304px]'
							/>

							<div className='ml-2 mt-2'>
								<ul className='flex flex-col gap-2 text-muted-foreground'>
									{funcs.map(func => (
										<li
											className='flex gap-2 text-xs font-light'
											key={projetoItem.id}>
											<span className='text-primary'>
												<ChevronsRightIcon />
											</span>
											<span>{func}</span>
										</li>
									))}
								</ul>
							</div>
						</CardContent>
					</Card>

					<Card className='w-full sm:w-1/2'>
						<CardContent>
							<CardTitle className='w-full text-start text-lg font-medium uppercase text-primary'>
								Tecnologias Utilizadas
							</CardTitle>

							<Image
								src={projetoItem.imgUrlTech}
								alt={projetoItem.name}
								width={702}
								height={450}
								className='h-[180px] w-[492px] rounded-md object-cover sm:h-[304px]'
							/>

							<div className='ml-2 mt-2'>
								<ul className='flex flex-col gap-2 text-muted-foreground'>
									{techs.map(tech => (
										<li
											className='flex gap-2 text-xs font-light'
											key={projetoItem.id}>
											<span className='text-primary'>
												<ChevronsRightIcon />
											</span>
											<span>{tech}</span>
										</li>
									))}
								</ul>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</SectionPage>
	);
};

export default ProjectDetailsPage;
