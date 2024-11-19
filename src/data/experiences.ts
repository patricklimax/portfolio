import type { Experience } from '@/types/experience';
import { projects } from './projects';

const projectsLength = projects.length;

export const experiences: Experience[] = [
	{
		quantity: 2,
		description: 'Anos de Experiência'
	},
	{
		quantity: projectsLength,
		description: 'Projetos Construídos'
	},
	{
		quantity: 4,
		description: 'Clientes pelo mundo'
	},
	{
		quantity: 0,
		description: 'Clientes Insatisfeitos'
	}
];
