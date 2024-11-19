import { Card, CardContent } from '@/components/ui/card';
import { experiences } from '@/data/experiences';
import type { Experience } from '@/types/experience';
import NumberTicker from '../ui/number-ticker';

export const ExperienceItem = ({ quantity, description }: Experience) => {
	return (
		<div className='text-center'>
			<p className='text-3xl font-bold text-primary sm:text-2xl'>
				<NumberTicker value={quantity > 1 ? quantity : 0.1} />
			</p>
			<p className='text-muted-foreground text-xs'>{description}</p>
		</div>
	);
};

export const Experiences = () => {
	return (
		<Card className='h-full'>
			<CardContent className='grid grid-cols-2 sm:grid-cols-4'>
				{experiences.map(experience => (
					<ExperienceItem
						key={experience.description}
						quantity={experience.quantity}
						description={experience.description}
					/>
				))}
			</CardContent>
		</Card>
	);
};
