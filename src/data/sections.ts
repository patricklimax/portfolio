import type { Section } from '@/types/section';

export const sections: Section[] = [
	{ nameId: 'about', href: '/about', title: 'Sobre mim' },
	{ nameId: 'services', href: '/services', title: 'Serviços' },
	{ nameId: 'projects', href: '/projects', title: 'Projetos' },
	{
		nameId: 'all-projects',
		href: '/projects/all-projects',
		title: 'Todos os Projetos'
	}
];
