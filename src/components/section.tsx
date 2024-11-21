'use client';
import { sections } from '@/data/sections';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import * as React from 'react';

export const TitlePage = () => {
	const pathName = usePathname();

	return (
		<>
			{sections.map(
				sec =>
					pathName === sec.href && (
						<h3
							key={sec.nameId}
							className='text-2xl font-semibold text-primary mb-6'>
							const <span className='text-foreground'>{sec.title}</span>
						</h3>
					)
			)}
		</>
	);
};

const SectionPage = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
	<div
		ref={ref}
		className={cn('h-full w-full p-2 sm:p-6', className)}
		{...props}>
		<TitlePage />
		{children}
	</div>
));

SectionPage.displayName = 'SectionPage';

export { SectionPage };
