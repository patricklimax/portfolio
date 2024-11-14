import type { MediaSocialType } from '@/types/media-social';
import {
	IconBrandGithub,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandWhatsapp
} from '@tabler/icons-react';

export const mediaSocial: MediaSocialType[] = [
	{
		name: 'linkedin',
		href: 'https://www.linkedin.com/in/patricklimax/',
		icon: IconBrandLinkedin
	},
	{
		name: 'github',
		href: 'https://github.com/patricklimax',
		icon: IconBrandGithub
	},
	{
		name: 'instagram',
		href: 'https://www.instagram.com/patricklimax/',
		icon: IconBrandInstagram
	},
	{
		name: 'whatsapp',
		href: 'https://wa.me/5598983342518',
		icon: IconBrandWhatsapp
	}
];
