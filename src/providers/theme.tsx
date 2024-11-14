'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type * as React from 'react';

const ProviderTheme = ({
	children,
	...props
}: React.ComponentProps<typeof NextThemesProvider>) => {
	return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export const ThemeProvider = ({
	children
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<ProviderTheme
			attribute='class'
			defaultTheme='system'
			enableSystem
			disableTransitionOnChange>
			{children}
		</ProviderTheme>
	);
};
