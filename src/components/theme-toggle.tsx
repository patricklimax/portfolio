'use client';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import React, { useState, useEffect } from 'react';

export const ToggleTheme = () => {
	const { theme, setTheme } = useTheme();
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) return null;

	const handleToggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<Button
			size={'icon'}
			variant={'outline'}
			type='button'
			onClick={handleToggleTheme}>
			{theme === 'dark' ? (
				<SunIcon strokeWidth={2} />
			) : (
				<MoonIcon strokeWidth={2} />
			)}
		</Button>
	);
};
