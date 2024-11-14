import * as React from 'react';

import { cn } from '@/lib/utils';

const BoxDiv = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(
			'bg-gradient-to-br from-primary/5 via-background/75 to-primary/10 rounded-md shadow-sm',
			className
		)}
		{...props}
	/>
));
BoxDiv.displayName = 'Card';

export { BoxDiv };
