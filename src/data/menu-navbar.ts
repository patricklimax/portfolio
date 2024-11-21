import type { ItemMenuNavBar } from '@/types/menu-navbar';
import * as lucideReact from 'lucide-react';

export const linksMenuNavBar: ItemMenuNavBar[] = [
	{
		name: 'Home',
		href: '/',
		icon: lucideReact.HomeIcon
	},
	{
		name: 'Sobre',
		href: '/about',
		icon: lucideReact.UserIcon
	},
	// {
	// 	name: 'Serviços',
	// 	href: '/services',
	// 	icon: lucideReact.BriefcaseBusinessIcon
	// },
	{
		name: 'Projetos',
		href: '/projects',
		icon: lucideReact.LayoutDashboardIcon
	}
];
