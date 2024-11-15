import { mediaSocial } from '@/data/media-social';
import type { MediaSocialType } from '@/types/media-social';
import clsx from 'clsx';
import Link from 'next/link';
import { BoxDiv } from './box-div';

const MediaSocialItem = ({ name, href, icon: Icon }: MediaSocialType) => {
	return (
		<Link
			className='group/item rounded-md p-1.5 bg-primary border border-primary'
			key={name}
			href={href}>
			<Icon
				size='20'
				className='group/edit stroke-2 text-background transition-all duration-200 group-hover/item:scale-110'
			/>
		</Link>
	);
};

type MediaSocialProps = {
	sizeMenuDesktop?: boolean;
};

export const MediaSocial = ({ sizeMenuDesktop }: MediaSocialProps) => {
	return (
		<BoxDiv
			className={clsx('flex gap-2', {
				'flex-col': !sizeMenuDesktop
			})}>
			{mediaSocial.map(item => (
				<MediaSocialItem
					key={item.name}
					href={item.href}
					name={item.name}
					icon={item.icon}
				/>
			))}
		</BoxDiv>
	);
};
