import { MoveRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '../ui/card';

export const AvatarCard = () => {
	return (
		<Card className='h-full'>
			<CardContent className='justify-between'>
				<div className='relative my-2 w-fit border'>
					<div className='absolute -left-[5px] -top-[5px] h-2.5 w-2.5 bg-primary' />
					<div className='absolute -right-[5px] -top-[5px] h-2.5 w-2.5 bg-primary' />
					<div className='absolute -bottom-[5px] -right-[5px] h-2.5 w-2.5 bg-primary' />
					<div className='absolute -bottom-[5px] -left-[5px] h-2.5 w-2.5 bg-primary' />
					<Image
						className='rounded-full bg-primary-foreground'
						src={'avatar.svg'}
						alt='Logo Developer'
						width={160}
						height={160}
					/>
				</div>

				<div>
					<p className='font-medium'>Olá,</p>
					<p className='font-medium'>Seja bem vindo!</p>
					<p className='font-medium'>Eu sou</p>
					<p className='font-medium text-primary'>Patrick</p>
				</div>

				<div className='flex w-full items-center justify-between text-muted-foreground'>
					<p className='text-xs font-medium'>Biografia</p>

					<Link
						href={'/about'}
						className='group/item cursor-pointer text-primary'>
						<MoveRightIcon
							size={32}
							strokeWidth={0.7}
							className='group/edit group/edit transition-all duration-500 group-hover/item:translate-x-2 group-hover/item:text-foreground'
						/>
					</Link>
				</div>
			</CardContent>
		</Card>
	);
};
